import { useState, useRef, useEffect } from 'react';

const SUGGESTIONS = [
  "What does Hope build?",
  "Is she open to work?",
  "What chains does she work on?",
  "Tell me about her journal",
];

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hey! I'm Hope's AI assistant. Ask me anything about her work, skills, or blockchain journey." },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  async function send(text) {
    const msg = text ?? input.trim();
    if (!msg) return;
    setInput('');
    setShowSuggestions(false);
    setMessages((m) => [...m, { role: 'user', text: msg }]);
    setTyping(true);
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: `You are Hope Mabuza's AI portfolio assistant. Hope is a full stack blockchain developer based in South Africa. She builds with Solidity, Hardhat, React, Node.js, Express, and Ethers.js. Her projects: GrowFi (DeFi yield protocol on Base Mainnet), SecureNFT (server-enforced NFT-gated dApp on Sepolia), GalaxyStake (NFT staking protocol). She trained at WeThinkCode and works at Africa's Blockchain Club. She documents her learning in a public GitBook journal. She is open to new opportunities. Answer warmly and concisely in under 3 sentences.`,
          messages: [{ role: 'user', content: msg }],
        }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: 'ai', text: data.content?.[0]?.text || "Reach out to Hope directly!" }]);
    } catch {
      setMessages((m) => [...m, { role: 'ai', text: "Sorry, having trouble connecting. Try reaching Hope directly at hopemabuzadev@gmail.com!" }]);
    } finally {
      setTyping(false);
    }
  }

  return (
    <>
      <button className="ai-chat-bubble" onClick={() => setOpen((o) => !o)} title="Ask Hope's AI">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l4.93-1.37A9.953 9.953 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 14H7v-2h4v2zm6 0h-4v-2h4v2zm0-4H7V8h10v4z"/></svg>
      </button>

      <div className={`ai-chat-panel${open ? ' open' : ''}`}>
        <div className="ai-chat-header">
          <div className="ai-chat-avatar">✦</div>
          <div>
            <div className="ai-chat-name">Ask Hope's AI</div>
            <div className="ai-chat-status">powered by claude · always on</div>
          </div>
          <button className="ai-chat-close" onClick={() => setOpen(false)}>×</button>
        </div>

        <div className="ai-chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.role}`}>
              {m.role === 'ai' && <div className="msg-label">Hope's AI</div>}
              {m.text}
            </div>
          ))}
          {typing && (
            <div className="chat-msg ai">
              <div className="msg-label">Hope's AI</div>
              <div className="ai-typing"><span /><span /><span /></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {showSuggestions && (
          <div className="chat-suggestions">
            {SUGGESTIONS.map((s) => (
              <button key={s} className="chat-suggestion" onClick={() => send(s)}>{s}</button>
            ))}
          </div>
        )}

        <div className="ai-chat-input-row">
          <input
            className="ai-chat-input"
            value={input}
            placeholder="Ask me anything about Hope…"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
          />
          <button className="ai-chat-send" onClick={() => send()}>
            <svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}
