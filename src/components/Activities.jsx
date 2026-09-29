import { useState, useRef, useEffect } from 'react';

const activities = [
  {
    num: '001',
    type: 'Freelance',
    title: 'Freelance Full-Stack Developer',
    org: "Africa's Blockchain Club",
    period: 'Mar 2026 – Present',
    desc: 'Backend and smart contract work for clients across DeFi, Web3 payments and web platforms. Five production systems shipped, including two live on BNB Chain mainnet.',
  },
  {
    num: '002',
    type: 'Training',
    title: 'Blockchain Developer Cohort Member',
    org: "Africa's Blockchain Club",
    period: 'Jan 2026 – Mar 2026',
    desc: 'Full-stack blockchain training: Solidity, Hardhat testing and backend integration. Moved into paid freelance work within two months.',
  },
  {
    num: '003',
    type: 'Community',
    title: 'Team1 Collaborator',
    org: 'Avalanche Team1',
    period: 'Aug 2026 – Present',
    desc: 'Help host community events and deliver workshops to grow the Avalanche developer community.',
  },
  {
    num: '004',
    type: 'Teaching',
    title: 'Blockchain Training Facilitator',
    org: 'University of Johannesburg',
    period: '2026',
    desc: 'Delivered a guest lecture and Solidity sessions for the SA-Swiss Bilateral Research Chair in Blockchain Technology, covering Ethereum, dApps and real-world use cases with hands-on coding.',
  },
  {
    num: '005',
    type: 'Volunteer',
    title: 'Work Readiness Facilitator',
    org: 'WeThinkCode_',
    period: 'Sep 2025 – May 2026',
    desc: 'Coached fellow students through mock interviews and ran sessions on communication, professionalism and teamwork.',
  },
  {
    num: '006',
    type: 'Education',
    title: 'Software Development Programme',
    org: 'WeThinkCode_, Johannesburg',
    period: '2025 – 2026',
    desc: 'Completed the 16-month project-based programme (Letter of Completion, July 2026). Python, Java, OOP, TDD, web development and blockchain.',
  },
  {
    num: '007',
    type: 'Hackathon',
    title: 'Ubuntu Health Vault',
    org: 'W3Node Hackathon',
    period: 'Jan 2026',
    desc: 'Prototype of a patient-owned medical records platform for South African patients, including consent by SMS/USSD for people with feature phones. Designed with POPIA in mind.',
  },
  {
    num: '008',
    type: 'Hackathon',
    title: 'Stru',
    org: 'Dev3Pack Hackathon',
    period: 'May 2026',
    desc: 'Prototype of a goal-accountability app where friends stake into a shared pool and AI checks proof that each goal was completed.',
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
      <div className="section-label">Experience &amp; community</div>
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
