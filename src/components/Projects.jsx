import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    num: '001',
    title: 'GrowFi',
    desc: 'Stablecoin yield generation protocol deployed on Base Mainnet and Sepolia. Handles yield logic, deposit mechanics, and reward distribution with a Node.js/Express backend and React frontend.',
    stack: ['Solidity', 'Hardhat', 'Node.js', 'Express', 'Smart Accounts', 'Base Mainnet', 'Sepolia'],
    links: [{ label: 'live app ↗', href: 'https://growfi-sigma.vercel.app/' }],
    meta: 'Base Mainnet · 2026 · Team Project',
  },
  {
    num: '002',
    title: 'SecureNFT',
    desc: 'NFT-gated dApp on Sepolia. ERC1155 soulbound Rose NFTs act as access keys, only holders can enter and mint. Access enforced server-side via Express to prevent frontend bypass.',
    stack: ['Solidity', 'Hardhat', 'ERC-1155', 'Node.js', 'Express', 'React', 'Ethers.js', 'Sepolia'],
    links: [{ label: 'github ↗', href: 'https://github.com/HopeMabuza/SecureNFT' }, { label: 'live app ↗', href: 'https://galaxynft.netlify.app' }],
    meta: 'Sepolia · 2026',
  },
  {
    num: '003',
    title: 'GalaxyStake',
    desc: 'NFT staking protocol where holders lock their ERC-721 tokens to earn on-chain rewards. Features staking mechanics, reward distribution logic, and a live frontend.',
    stack: ['Solidity', 'Hardhat', 'Sepolia', 'React', 'ERC-721'],
    links: [
      { label: 'github ↗', href: 'https://github.com/HopeMabuza/NFT_Staking' },
      { label: 'live app ↗', href: 'https://galaxystake.netlify.app' },
    ],
    meta: 'Sepolia · Netlify · 2026',
  },
];

// Duplicate for infinite scroll loop
const loopedProjects = [...projects, ...projects];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const TOTAL = projects.length;

  function cardWidth() {
    const card = trackRef.current?.querySelector('.project-card');
    return card ? card.offsetWidth + 2 : 382;
  }

  function goTo(index) {
    const next = ((index % TOTAL) + TOTAL) % TOTAL;
    setCurrent(next);
    setIsManual(true);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${next * cardWidth()}px)`;
    }
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsManual(false);
      if (trackRef.current) trackRef.current.style.transform = '';
    }, 5000);
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    touchStartX.current = null;
  }

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <section className="projects" id="projects">
      <div className="section-label">Selected Work</div>
      <div className="carousel-wrapper">
        <div className="carousel-fade-left" />
        <div className="carousel-fade-right" />
        <div
          className="carousel-track-outer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            className={`carousel-track${isManual ? ' manual' : ''}`}
          >
            {loopedProjects.map((p, i) => {
              const primaryHref = (p.links.find(l => l.label.startsWith('live')) || p.links[0]).href;
              return (
                <div
                  className="project-card"
                  key={i}
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open(primaryHref, '_blank', 'noopener,noreferrer')}
                >
                  <div className="pc-num">{p.num}</div>
                  <div className="pc-title">{p.title}</div>
                  <div className="pc-desc">{p.desc}</div>
                  <div className="pc-stack">
                    {p.stack.map((t) => <span className="stack-tag" key={t}>{t}</span>)}
                  </div>
                  <div className="pc-links">
                    {p.links.map((l) => (
                      <a key={l.label} href={l.href} className="pc-link" target="_blank" rel="noopener" onClick={e => e.stopPropagation()}>{l.label}</a>
                    ))}
                  </div>
                  <div className="pc-meta">{p.meta}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-arrow" onClick={() => goTo(current - 1)}>←</button>
        <div className="carousel-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button className="carousel-arrow" onClick={() => goTo(current + 1)}>→</button>
      </div>
    </section>
  );
}
