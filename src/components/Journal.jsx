const entries = [
  {
    date: 'Nov 2025',
    tag: 'Smart Contracts',
    title: 'Why I spent 3 days debugging a reentrancy vulnerability in my own contract',
    excerpt: 'I thought I understood reentrancy. I had read the articles, studied the DAO hack, even written a test for it. Then I deployed to testnet and watched my own protocol drain itself in under a minute.',
    featured: true,
  },
  {
    date: 'Oct 2025',
    tag: 'DeFi',
    title: 'How GrowFi\'s yield mechanics actually work under the hood',
    excerpt: 'Walking through the deposit, accrual, and redemption flow , and the edge cases that almost broke it in production.',
  },
  {
    date: 'Sep 2025',
    tag: 'NFTs',
    title: 'Building server-side NFT gating so the frontend can\'t be bypassed',
    excerpt: 'Most NFT gates live in the UI. That\'s not a gate , it\'s a suggestion. Here\'s how SecureNFT enforces access on the backend.',
  },
];

export default function Journal() {
  return (
    <section className="journal" id="journal">
      <div className="journal-header">
        <div>
          <div className="journal-eyebrow">Learning in Public</div>
          <h2 className="journal-title">The <em>Journal</em></h2>
        </div>
        <div className="journal-subtitle">
          "I document everything , the breakthroughs, the dead ends, the moments it finally clicks."
        </div>
      </div>
      <div className="journal-grid">
        {entries.map((e) => (
          <a
            key={e.title}
            className={`journal-entry${e.featured ? ' featured' : ''}`}
            href="https://blockchain-journal-hope-mabuza.gitbook.io/blockchain-journal-hope-mabuza-docs/"
            target="_blank"
            rel="noopener"
            style={{ textDecoration: 'none' }}
          >
            <div className="je-date">{e.date}</div>
            <div className="je-tag">{e.tag}</div>
            <div className="je-title">{e.title}</div>
            <div className="je-excerpt">{e.excerpt}</div>
            <span className="je-read">read →</span>
          </a>
        ))}
      </div>
      <a
        href="https://blockchain-journal-hope-mabuza.gitbook.io/blockchain-journal-hope-mabuza-docs/"
        target="_blank"
        rel="noopener"
        className="journal-gitbook-cta"
      >
        <span>read the full journal on GitBook</span>
        <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7H13M13 7L7 1M13 7L7 13" />
        </svg>
      </a>
    </section>
  );
}
