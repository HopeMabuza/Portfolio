import { links } from '../content';
import Section from './Section';

// Journal entries are unchanged from the old site.

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
    <Section id="journal" title="Journal" sub="Learning in public.">
      <div className="journal-grid">
        {entries.map((e) => (
          <a
            key={e.title}
            className="journal-card"
            href={e.href || links.journal}
            target="_blank"
            rel="noopener"
          >
            <p className="journal-tag">{e.tag}</p>
            <h3 className="journal-title">{e.title}</h3>
            <p className="journal-excerpt">{e.excerpt}</p>
            <span className="journal-read">Read entry</span>
          </a>
        ))}
      </div>
      <a className="journal-all" href={links.journal} target="_blank" rel="noopener">
        Read the full journal on GitBook
      </a>
    </Section>
  );
}
