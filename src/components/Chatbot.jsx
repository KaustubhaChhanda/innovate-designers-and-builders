import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, RotateCcw, MessageCircle, Bot, User, Loader2, Sparkles } from 'lucide-react';

/* ─── Config ─── */
const GROQ_API_URL = '/api/groq/openai/v1/chat/completions';
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';

const SYSTEM_PROMPT = `You are a helpful, friendly assistant for Innovate Designers & Builders Pvt Ltd — a premium construction and interior design company in Trivandrum, Kerala.

Services offered:
• House & Villa Construction — Budget, Semi-Economical, Economical, Luxury tiers
• Architectural Designing — Contemporary, Box Type, Colonial, Curved Roof, Traditional-Contemporary, Western elevations
• Interior Designing — Living Area, Dining Room, Kitchen, Bedroom, Kids Room, Home Theater
• Turnkey Construction Contracts
• Project Management

Contact details:
• Phone/WhatsApp: 9995 365 128 | 9388 100 090
• Email: idbtvm@gmail.com
• Address: Tc 93/1944, KRA 111A, Pettah P.O, Trivandrum, Kerala – 695024
• Google Maps Location: https://www.google.com/maps/search/?api=1&query=Innovate+Designers+%26+Builders+Pettah+Trivandrum

Rules:
- Keep responses short (2-4 sentences max) and conversational
- For pricing, say it depends on plot size and materials; suggest a free consultation
- Always end with an invitation to call or visit
- If the user asks for directions, office location, address, map, or Google Maps link, ALWAYS provide the exact Google Maps link in markdown: [View on Google Maps](https://www.google.com/maps/search/?api=1&query=Innovate+Designers+%26+Builders+Pettah+Trivandrum)
- Be warm and professional`;

const DEFAULT_PROMPTS = [
  '🏠 Services offered?',
  '💰 Construction cost?',
  '⏱️ How long to build?',
  '🛋️ Interior design?',
];

/* ─── WhatsApp floating button ─── */
export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919995365128/?text=Hi%20Innovate%20team%2C%20I%20am%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project?"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="fixed bottom-6 right-20 z-[998] w-12 h-12 rounded-full shadow-xl flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </motion.a>
  );
}

function formatMessageContent(text) {
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('[') && part.includes('](')) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <a
            key={index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-amber-600 underline font-semibold transition-colors break-all"
          >
            {match[1]}
          </a>
        );
      }
    }
    return part;
  });
}

/* ─── Simple message formatter ─── */
function MessageText({ text }) {
  return (
    <>
      {text.split('\n').map((line, i, arr) => (
        <span key={i}>
          {formatMessageContent(line)}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

/* ─── Main Chatbot Component ─── */
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "👋 Hi! I'm Innovate's virtual assistant. Ask me about our construction services, pricing, timelines, or interior design!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 350);
  }, [isOpen]);

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText || isLoading) return;

    const updatedMessages = [...messages, { role: 'user', content: userText }];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...updatedMessages.map(m => ({ role: m.role, content: m.content })),
          ],
          max_tokens: 250,
          temperature: 0.65,
        }),
      });

      if (!res.ok) throw new Error(`API error ${res.status}`);
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content?.trim() ||
        "I couldn't get a response. Please call us at **9995 365 128**.";

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having a momentary issue. Please try again or reach us at 📞 **9995 365 128**.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{
      role: 'assistant',
      content: "Chat cleared! How can I help you today?",
    }]);
  };

  return (
    <>
      {/* ─── Toggle Bubble ─── */}
      <motion.button
        aria-label="Open Chat"
        onClick={() => setIsOpen(p => !p)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-[999] w-12 h-12 rounded-full shadow-lg flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #d97706 0%, #ea580c 50%, #c2410c 100%)' }}
      >
        {/* Pulse ring — only when closed */}
        {!isOpen && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ background: 'rgba(234, 88, 12, 0.35)' }}
            animate={{ scale: [1, 1.55, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          />
        )}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <X size={20} className="text-white" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.18 }}>
              <MessageCircle size={22} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ─── Chat Panel ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.93 }}
            transition={{ duration: 0.22, type: 'spring', damping: 26, stiffness: 320 }}
            className="fixed z-[997] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{ width: '330px', height: '460px', bottom: '80px', right: '24px' }}
          >
            {/* Header — premium dark slate gradient */}
            <div
              className="shrink-0 px-4 py-3 flex items-center justify-between"
              style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7.5 h-7.5 rounded-full flex items-center justify-center" style={{ background: 'rgba(245,158,11,0.12)' }}>
                  <Sparkles size={14} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-xs leading-none font-heading">Innovate AI</div>
                  <div className="text-amber-400/80 text-[9px] mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Online · Replies instantly
                  </div>
                </div>
              </div>
              <button
                onClick={clearChat}
                title="Clear Chat"
                className="text-white/40 hover:text-white/90 transition-colors p-1.5 rounded-lg hover:bg-white/10"
              >
                <RotateCcw size={12} />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-3 bg-slate-50 flex flex-col gap-2.5">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`flex gap-1.5 items-end ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white"
                    style={{
                      background: msg.role === 'user'
                        ? 'linear-gradient(135deg,#ea580c,#c2410c)'
                        : 'linear-gradient(135deg,#1e293b,#0f172a)',
                    }}
                  >
                    {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  {/* Bubble */}
                  <div
                    className={`max-w-[78%] px-3 py-2 rounded-2xl text-[13px] leading-relaxed ${
                      msg.role === 'user'
                        ? 'text-white rounded-tr-sm shadow-sm'
                        : 'bg-white text-slate-800 rounded-tl-sm border border-slate-100 shadow-sm'
                    }`}
                    style={msg.role === 'user' ? { background: 'linear-gradient(135deg,#ea580c,#c2410c)' } : {}}
                  >
                    <MessageText text={msg.content} />
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-1.5 items-end">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg,#1e293b,#0f172a)' }}>
                    <Bot size={12} />
                  </div>
                  <div className="bg-white px-3.5 py-2 rounded-2xl rounded-tl-sm border border-slate-100 shadow-sm">
                    <div className="flex gap-1 items-center">
                      {[0, 0.2, 0.4].map(d => (
                        <motion.span
                          key={d}
                          className="w-1.5 h-1.5 rounded-full bg-slate-400"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8, delay: d }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Default prompts — shown only on first message */}
            {messages.length === 1 && !isLoading && (
              <div className="shrink-0 px-3 pb-2.5 pt-1.5 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-1.5">
                {DEFAULT_PROMPTS.map(p => (
                  <button
                    key={p}
                    onClick={() => sendMessage(p)}
                    className="text-[11px] px-2.5 py-1.5 rounded-full border text-slate-600 bg-white hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50 transition-all duration-200 font-medium border-slate-200"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Input bar */}
            <div className="shrink-0 px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-2">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                placeholder="Ask me anything…"
                className="flex-1 resize-none text-[13px] text-slate-700 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-amber-500 transition-colors max-h-20 overflow-y-auto"
                style={{ lineHeight: '1.4' }}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isLoading}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition-all shrink-0 hover:scale-105"
                style={{ background: 'linear-gradient(135deg,#ea580c,#c2410c)' }}
              >
                <Send size={13} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
