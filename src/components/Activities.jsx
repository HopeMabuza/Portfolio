import { useState, useRef, useEffect } from 'react';

const activities = [
  {
    num: '001',
    type: 'Role',
    title: 'Blockchain Developer',
    org: 'Africa\'s Blockchain Club',
    period: 'Jan 2026 — Present',
    desc: 'Writing and deploying smart contracts across DeFi, NFT, and token protocols. Full-cycle development from design to live mainnet deployment, with code review and Agile team practices.',
  },
  {
    num: '002',
    type: 'Hackathon',
    title: 'Stru',
    org: 'Dev3Pack Hackathon',
    period: 'May 2026',
    desc: 'Solana accountability protocol where friends stake SOL, commit to goals, submit proof, and AI verifies outcomes. Anchor/Rust on-chain program with Phantom wallet integration.',
  },
  {
    num: '003',
    type: 'Hackathon',
    title: 'Ubuntu Health Vault',
    org: 'W3Node Hackathon',
    period: 'Jan 2026',
    desc: 'Patient-owned medical records platform. ERC-4337 smart account login, SMS/USSD flows for feature phone users, and encrypted IPFS storage.',
  },
  {
    num: '004',
    type: 'Volunteer',
    title: 'Blockchain Training Facilitator',
    org: 'University of Johannesburg',
    period: '2026',
    desc: 'Facilitated Solidity and smart contract sessions for the SA-Swiss Bilateral Research Chair in Blockchain Technology. Covered Ethereum, decentralised applications, and real-world use cases.',
  },
  {
    num: '005',
    type: 'Volunteer',
    title: 'Work Readiness Facilitator',
    org: 'WeThinkCode_',
    period: 'Sep 2025 — May 2026',
    desc: 'Coached fellow students on interview prep, mock interviews, and workplace soft skills including communication, professionalism, and team collaboration.',
  },
];

const loopedActivities = [...activities, ...activities];

export default function Activities() {
  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const TOTAL = activities.length;

  function cardWidth() {
    const card = trackRef.current?.querySelector('.activity-card');
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
    <section className="activities-section" id="activities">
      <div className="section-label">Activities</div>
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
            {loopedActivities.map((a, i) => (
              <div className="activity-card" key={i}>
                <div className="pc-num">{a.num}</div>
                <div className="activity-type">{a.type}</div>
                <div className="pc-title">{a.title}</div>
                <div className="activity-org">{a.org}</div>
                <div className="pc-desc">{a.desc}</div>
                <div className="pc-meta">{a.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-arrow" onClick={() => goTo(current - 1)}>←</button>
        <div className="carousel-dots">
          {activities.map((_, i) => (
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
