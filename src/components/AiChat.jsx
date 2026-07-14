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

  function getResponse(msg) {
    const m = msg.toLowerCase();

    // Greetings
    if (m.includes('hello') || m.includes('hi') || m.includes('hey') || m.includes('sup') || m.includes('who are you')) {
      return "Hey! I'm Hope's AI assistant. Ask me about her projects, tech stack, hackathons, background, or availability, and I'll fill you in.";
    }

    // GrowFi
    if (m.includes('growfi') || m.includes('grow fi') || m.includes('aave') || m.includes('usdc') || m.includes('auto-compound') || m.includes('yield vault') || (m.includes('yield') && !m.includes('galaxystake'))) {
      return "GrowFi is a stablecoin yield protocol Hope helped build as a capstone team project. It features an auto-compounding USDC yield vault on Aave, on-chain deposit and yield-distribution logic, ERC-4337 smart wallet integration, a Node.js/Express backend, and a React frontend. It's deployed live on Base Mainnet and Sepolia.";
    }

    // SecureNFT
    if (m.includes('securenft') || m.includes('secure nft') || m.includes('nft-gated') || m.includes('nft gated') || m.includes('erc-1155') || m.includes('erc1155') || m.includes('soulbound') || m.includes('upgradeable') || m.includes('proxy')) {
      return "SecureNFT is a permissioned credential system Hope built at Africa's Blockchain Club. Soulbound ERC-1155 NFTs act as non-transferable access keys, with server-side blockchain verification via Express to prevent any frontend bypass. It uses an upgradeable proxy architecture, making it suitable for enterprise and regulated environments.";
    }

    // GalaxyStake
    if (m.includes('galaxystake') || m.includes('galaxy stake') || m.includes('staking') || m.includes('erc-721') || m.includes('erc721')) {
      return "GalaxyStake is an NFT staking protocol Hope built at Africa's Blockchain Club. Holders lock ERC-721 tokens on-chain to earn rewards, with full Hardhat test coverage and a live React frontend on Sepolia.";
    }

    // Ubuntu Health Vault hackathon
    if (m.includes('ubuntu') || m.includes('health vault') || m.includes('w3node') || m.includes('medical') || m.includes('popia') || m.includes('ussd')) {
      return "At the W3Node Hackathon (January 2026), Hope built Ubuntu Health Vault, a patient-owned medical records platform for South African patients. It featured ERC-4337 smart account login (no seed phrase needed), SMS/USSD consent flows for feature phone users, encrypted IPFS storage, AI-generated pre-consultation summaries, and three role-based dashboards. It was designed for POPIA compliance with a clinic-subscription business model.";
    }

    // Stru hackathon
    if (m.includes('stru') || m.includes('dev3pack') || m.includes('solana') || m.includes('anchor') || m.includes('rust') || m.includes('phantom') || m.includes('accountability') || m.includes('goal')) {
      return "At the Dev3Pack Hackathon (May 2026), Hope built Stru, a Solana accountability app. Friends stake into a shared on-chain pool, commit to goals, submit proof, and an AI agent (Google Gemini) verifies the proof. Winners claim their stake on-chain. The on-chain program was written in Rust/Anchor, the backend in Express/TypeScript, with Supabase for off-chain state and Phantom wallet integration. This was Hope's first Solana/Rust project.";
    }

    // Hackathons general
    if (m.includes('hackathon') || m.includes('hackathons') || m.includes('competition') || m.includes('compete')) {
      return "Hope has competed in two hackathons: W3Node (January 2026), where she built Ubuntu Health Vault, a patient-owned medical records platform using ERC-4337 and IPFS; and Dev3Pack (May 2026), where she built Stru, a Solana accountability protocol with Rust/Anchor and AI-powered proof verification.";
    }

    // Projects overview
    if (m.includes('project') || m.includes('portfolio') || m.includes('what has she built') || m.includes('what did she build')) {
      return "Hope has built three main blockchain projects: GrowFi (auto-compounding USDC yield vault on Base Mainnet, with ERC-4337), SecureNFT (soulbound ERC-1155 permissioned credential system with upgradeable proxy), and GalaxyStake (ERC-721 NFT staking protocol). She's also built two hackathon projects: Ubuntu Health Vault (W3Node) and Stru (Dev3Pack, on Solana).";
    }

    // ERC-4337 / account abstraction
    if (m.includes('erc-4337') || m.includes('erc4337') || m.includes('account abstraction') || m.includes('smart account') || m.includes('smart wallet')) {
      return "Hope has hands-on experience with ERC-4337 account abstraction. She implemented smart wallet integration in GrowFi and used ERC-4337 for social/email login (no seed phrase) in Ubuntu Health Vault at the W3Node Hackathon.";
    }

    // IPFS
    if (m.includes('ipfs') || m.includes('distributed storage') || m.includes('decentralised storage')) {
      return "Hope integrated encrypted IPFS storage in Ubuntu Health Vault (W3Node Hackathon), used for securely storing patient medical records off-chain while keeping access control on-chain.";
    }

    // AI / Gemini
    if (m.includes('gemini') || m.includes('ai agent') || m.includes('artificial intelligence') || m.includes('ai tool') || m.includes('proof verif')) {
      return "Hope has worked with AI tooling in her projects. In Stru (Dev3Pack Hackathon), she integrated Google Gemini as an AI goal-refinement agent and for AI-powered proof verification. She's also completed WeThinkCode_'s Gen-AI Course for Developers, covering AI for code comprehension, debugging, refactoring, and documentation.";
    }

    // Chains / networks
    if (m.includes('chain') || m.includes('network') || m.includes('base mainnet') || m.includes('sepolia') || m.includes('layer 2') || m.includes('l2') || m.includes('arbitrum') || m.includes('polygon')) {
      return "Hope works primarily on Base Mainnet (live L2 — GrowFi is deployed there) and Sepolia testnet. She also has knowledge of Arbitrum and Polygon from WeThinkCode_ curriculum, and has deployed on Solana Devnet via the Stru hackathon project.";
    }

    // Solidity / smart contracts
    if (m.includes('solidity') || m.includes('smart contract') || m.includes('evm') || m.includes('hardhat') || m.includes('security') || m.includes('reentrancy') || m.includes('access control')) {
      return "Solidity is Hope's primary language. She's written and deployed production contracts across DeFi (GrowFi), NFT credentials (SecureNFT), and NFT staking (GalaxyStake), covering ERC-20, ERC-721, and ERC-1155 standards. Her work includes reentrancy protection, access control, upgradeable proxy patterns, and full Hardhat test suites.";
    }

    // Tech stack / skills
    if (m.includes('stack') || m.includes('tech') || m.includes('skill') || m.includes('tool') || m.includes('language')) {
      return "Hope's core stack is Solidity, Hardhat, React, Node.js, Express, ethers.js, and TypeScript. She's also worked with Rust/Anchor (Solana), Supabase, IPFS, Google Gemini, Python, Java, and SQL. On the frontend she handles React with MetaMask and Phantom wallet integrations.";
    }

    // Backend
    if (m.includes('backend') || m.includes('node') || m.includes('express') || m.includes('api') || m.includes('nestjs') || m.includes('typescript') || m.includes('supabase')) {
      return "Hope builds backends with Node.js and Express, connecting smart contracts via ethers.js and ABI integration. She's used TypeScript in the Stru backend, Supabase for off-chain state management, and has knowledge of NestJS. Her backends handle everything from server-side blockchain verification to RESTful API design.";
    }

    // Frontend / React
    if (m.includes('frontend') || m.includes('react') || m.includes('ui') || m.includes('metamask') || m.includes('wallet connect')) {
      return "Hope builds React frontends for Web3 apps, with MetaMask wallet integration (EVM) and Phantom wallet integration (Solana). She's shipped live frontends for GrowFi and GalaxyStake, and built multi-dashboard UIs for hackathon projects.";
    }

    // Python / Java / TDD
    if (m.includes('python') || m.includes('java') || m.includes('tdd') || m.includes('test-driven') || m.includes('oop') || m.includes('algorithm')) {
      return "Beyond blockchain, Hope trained in Python and Java at WeThinkCode_, applying OOP, TDD, and algorithmic problem-solving across projects like a Sudoku Solver, Mars Rover, UNO card game engine, and a concurrent multiplayer Robot Worlds server in Java. She also built a spam detection tool in Python.";
    }

    // WeThinkCode / education / training
    if (m.includes('wethinkcod') || m.includes('education') || m.includes('study') || m.includes('study') || m.includes('degree') || m.includes('certif') || m.includes('nqf') || m.includes('qualification')) {
      return "Hope completed a 16-month intensive software engineering programme at WeThinkCode_, Johannesburg (2025–2026), earning a Certificate of Completion at graduation in September 2026. The programme is aligned to an NQF Level 6 Occupational Certificate (SAQA ID 119458, 240 credits), with certification pending the EISA exam. She also holds a Cyfrin Updraft Blockchain Basics certificate and a WeThinkCode_ Gen-AI Course certificate.";
    }

    // University of Johannesburg / facilitation / teaching
    if (m.includes('university') || m.includes('uj') || m.includes('facilitat') || m.includes('teach') || m.includes('lecture') || m.includes('mentor')) {
      return "Hope volunteered as a Blockchain Training Facilitator at the University of Johannesburg, delivering a guest lecture on Solidity and smart contract fundamentals for the SA-Swiss Bilateral Research Chair in Blockchain Technology. She also facilitated work readiness sessions at WeThinkCode_, coaching students on interview prep, mock interviews, and workplace soft skills.";
    }

    // Africa's Blockchain Club / role
    if (m.includes('africa') || m.includes('abc') || m.includes('blockchain club') || m.includes('club')) {
      return "Hope is a Blockchain Developer at Africa's Blockchain Club (January 2026 – present), where she writes and deploys smart contracts, builds full-stack Web3 applications, conducts code reviews, and contributes to architecture decisions. Projects under this role include GrowFi, SecureNFT, and GalaxyStake.";
    }

    // Agile / collaboration / git
    if (m.includes('agile') || m.includes('scrum') || m.includes('git') || m.includes('team') || m.includes('collaborat') || m.includes('code review')) {
      return "Hope works in Agile/Scrum teams, with experience in standups, sprints, retrospectives, and showcases. She does daily Git collaboration, code reviews, and architecture discussions at Africa's Blockchain Club and WeThinkCode_.";
    }

    // Journal / GitBook
    if (m.includes('journal') || m.includes('gitbook') || m.includes('blog') || m.includes('document') || m.includes('writing')) {
      return "Hope documents her entire blockchain learning journey in a public GitBook journal. You can read it at blockchain-journal-hope-mabuza.gitbook.io/blockchain-journal-hope-mabuza-docs/";
    }

    // Location
    if (m.includes('location') || m.includes('based') || m.includes('where') || m.includes('south africa') || m.includes('gauteng') || m.includes('kempton') || m.includes('remote')) {
      return "Hope is based in Kempton Park, Gauteng, South Africa. She's open to remote roles as well as opportunities within South Africa.";
    }

    // Availability / hiring
    if (m.includes('available') || m.includes('open to work') || m.includes('hire') || m.includes('hiring') || m.includes('job') || m.includes('opportunit') || m.includes('recruit') || m.includes('looking for work')) {
      return "Yes! Hope is actively looking for new opportunities. She's open to blockchain developer roles, smart contract engineering, and full-stack Web3 positions. You can reach her at hopemabuzadev@gmail.com.";
    }

    // Contact
    if (m.includes('contact') || m.includes('email') || m.includes('reach') || m.includes('get in touch') || m.includes('connect')) {
      return "You can reach Hope at hopemabuzadev@gmail.com. She's always happy to connect with developers, collaborators, or hiring teams.";
    }

    // Build / work overview fallback
    if (m.includes('build') || m.includes('built') || m.includes('work') || m.includes('experience') || m.includes('background')) {
      return "Hope is a full-cycle blockchain developer with experience in smart contract development, backend APIs, and React frontends. She's shipped production projects at Africa's Blockchain Club, built two hackathon projects, and trained at WeThinkCode_. Her stack covers Solidity, Node.js, React, ethers.js, and she's also shipped on Solana with Rust/Anchor.";
    }

    return "Great question! For anything I can't cover, you can reach Hope directly at hopemabuzadev@gmail.com. She's always happy to chat.";
  }

  function send(text) {
    const msg = text ?? input.trim();
    if (!msg) return;
    setInput('');
    setShowSuggestions(false);
    setMessages((m) => [...m, { role: 'user', text: msg }]);
    setTyping(true);
    setTimeout(() => {
      const reply = getResponse(msg);
      setMessages((m) => [...m, { role: 'ai', text: reply }]);
      setTyping(false);
    }, 800);
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
