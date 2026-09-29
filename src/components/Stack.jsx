const groups = [
  {
    label: 'Smart contracts',
    items: ['Solidity', 'Hardhat', 'OpenZeppelin', 'UUPS upgradeable contracts', 'ERC-20', 'ERC-721', 'ERC-1155', 'ERC-4337', 'Reentrancy protection', 'Access control', 'The Graph', 'IPFS (Pinata)'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'MongoDB', 'Mongoose', 'Prisma', 'JWT / Passport', 'Role-based access control', 'Sign-In with Ethereum', 'Magic-link login'],
  },
  {
    label: 'Web3 integration',
    items: ['ethers.js', 'viem', 'wagmi', 'Reown AppKit'],
  },
  {
    label: 'Testing & docs',
    items: ['Hardhat / Chai', 'Jest', 'TDD', 'OpenAPI 3.0', 'Swagger', 'Mintlify'],
  },
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Solidity', 'Python', 'Java'],
  },
  {
    label: 'Networks',
    items: ['BNB Chain', 'Base', 'Ethereum Sepolia'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'GitLab', 'Agile / Scrum'],
  },
  {
    label: 'Frontend (working knowledge)',
    items: ['React', 'Next.js', 'Vite'],
  },
];

export default function Stack() {
  return (
    <section className="stack-section" id="stack">
      <div className="stack-header">
        <div className="stack-eyebrow">Skills</div>
        <p className="stack-sub">What I've used in real projects.</p>
      </div>
      <div className="stack-rows">
        {groups.map((g, i) => (
          <div key={g.label} className="stack-row">
            <div className="stack-row-index">{String(i + 1).padStart(2, '0')}</div>
            <div className="stack-row-label">{g.label}</div>
            <div className="stack-row-pills">
              {g.items.map((item) => (
                <span key={item} className="stack-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
