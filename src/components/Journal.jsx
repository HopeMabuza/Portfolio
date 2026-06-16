const entries = [
  {
    date: 'Week 1',
    tag: 'Blockchain Basics',
    title: 'Introduction to Blockchain , History, Architecture, and My First Transaction',
    excerpt: 'Blockchain wasn\'t just a technical invention, it was built out of frustration with a broken system. This week I went from understanding the theory of decentralization to watching my own wallet address appear on Etherscan , and that\'s when trustless systems finally clicked.',
    featured: true,
    href: 'https://blockchain-journal-hope-mabuza.gitbook.io/blockchain-journal-hope-mabuza-docs/smart-contracts/week-1-introduction-to-blockchain-history-and-architecture.',
  },
  {
    tag: 'Account Abstraction',
    title: 'ERC-4337, Smart Wallets, and Why Previous EIPs Failed',
    excerpt: 'EOAs are rigid , lose your key, lose everything. This week I explored how ERC-4337 sidesteps that by building on top of Ethereum instead of changing its core protocol, and built a UUPS upgradable multi-sig escrow that finally made upgradeable contracts click.',
    href: 'https://blockchain-journal-hope-mabuza.gitbook.io/blockchain-journal-hope-mabuza-docs/smart-contracts/week-7-account-abstraction-erc-4337-and-smart-wallets',
  },
  {
    tag: 'Backend',
    title: 'Why We Need Servers in Web3 Apps',
    excerpt: 'I used to think servers were a web2 thing. Turns out web3 apps are mostly hybrid , the blockchain handles what needs to be trustless, and regular web2 servers handle everything that needs to be fast, flexible, and cheap.',
    href: 'https://blockchain-journal-hope-mabuza.gitbook.io/blockchain-journal-hope-mabuza-docs/backend/why-we-need-servers-in-web3-apps',
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
            href={e.href || 'https://blockchain-journal-hope-mabuza.gitbook.io/blockchain-journal-hope-mabuza-docs/'}
            target="_blank"
            rel="noopener"
            style={{ textDecoration: 'none' }}
          >
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
