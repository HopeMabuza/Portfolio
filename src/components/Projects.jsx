import growFiImg from '../../images/GrowFi.png';

const projects = [
  {
    title: 'GrowFi',
    tagline: 'Stablecoin yield protocol, live on Base Mainnet',
    meta: 'WeThinkCode_ capstone · Team project · 2026',
    screenshot: growFiImg,
    summary:
      'GrowFi lets users deposit USDC into a vault that earns yield through Aave and compounds it automatically.',
    role:
      'Backend and smart contract developer. I worked across the backend and smart contract components alongside my teammates. The React frontend was built by the team.',
    builtLabel: 'What I worked on',
    built: [
      'Auto-compounding USDC yield vault contracts integrated with Aave',
      'On-chain deposit and yield-distribution logic',
      'ERC-4337 smart wallet integration, so users interact through smart accounts',
      'A Node.js/Express API that connects the app to the contracts using ethers.js',
    ],
    extra: null,
    tested:
      'A Hardhat test suite for the smart contracts. Deployed on Sepolia testnet as well as Base Mainnet.',
    stack: ['Solidity', 'Hardhat', 'Node.js', 'Express', 'ethers.js', 'ERC-4337', 'Aave', 'Base Mainnet'],
  },
  {
    title: 'Training Programme Portal',
    tagline: 'Wallet sign-in and API for a blockchain developer training programme, live in production',
    meta: 'Freelance client project · Team project · 2026',
    screenshot: null,
    summary:
      'A portal for the developers in a blockchain training programme. Developers register and admins manage the programme. Users sign in with their crypto wallet instead of an email and password.',
    role:
      'Backend engineer and technical documentation lead. The team built most of the frontend pages and admin UI, the Docker setup, the core data models, the first versions of the routes and the monorepo setup.',
    builtLabel: 'What I built',
    built: [
      'Sign-In with Ethereum (SIWE) to replace email/password login: nonce generation, message signing and JWT issuance, with nonces that expire automatically (MongoDB TTL index) to prevent replay attacks',
      'Role-based access control middleware applied across all routes for four user roles',
      'A standard API error format with global error handling, so every error response looks the same',
      'Registration and admin-approval workflows: wallet address validation, duplicate detection across email, handle and wallet, and clear field-level errors',
      'Wallet sign-in on the frontend using wagmi (Sepolia)',
    ],
    extra: {
      label: 'Documentation',
      items: [
        'Wrote and maintained the full OpenAPI 3.0 specification, with an export script',
        'Built the complete Mintlify API reference site: navigation, intro, quickstart and about 30 endpoint pages',
      ],
    },
    tested:
      "A SIWE test script covering the sign-in flow, including rejecting wallets that aren't registered.",
    stack: ['Express.js', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT', 'SIWE', 'wagmi', 'OpenAPI 3.0', 'Mintlify'],
    note: 'Client work is confidential, so no code or links are shared.',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-label">Selected work</div>
      <div className="case-list">
        {projects.map((p) => (
          <article className="case" key={p.title}>
            {p.screenshot && (
              <div className="case-shot">
                <img src={p.screenshot} alt={`${p.title} screenshot`} />
              </div>
            )}
            <div className="case-grid">
              <div className="case-intro">
                <h3 className="case-title">{p.title}</h3>
                <p className="case-tagline">{p.tagline}</p>
                <p className="case-meta">{p.meta}</p>
                <p className="case-summary">{p.summary}</p>
                <h4 className="case-h">My role</h4>
                <p className="case-text">{p.role}</p>
              </div>
              <div className="case-detail">
                <h4 className="case-h">{p.builtLabel}</h4>
                <ul className="case-ul">
                  {p.built.map((b) => <li key={b}>{b}</li>)}
                </ul>
                {p.extra && (
                  <>
                    <h4 className="case-h">{p.extra.label}</h4>
                    <ul className="case-ul">
                      {p.extra.items.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </>
                )}
                <h4 className="case-h">How it was tested</h4>
                <p className="case-text">{p.tested}</p>
                <div className="pc-stack">
                  {p.stack.map((t) => <span className="stack-tag" key={t}>{t}</span>)}
                </div>
                {p.note && <p className="case-note">{p.note}</p>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
