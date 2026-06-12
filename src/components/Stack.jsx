const groups = [
  {
    label: 'Blockchain',
    items: ['Solidity', 'Ethers.js', 'Chainlink VRF', 'ERC-20', 'ERC-721', 'ERC-1155', 'Smart Accounts', 'DeFi Protocols', 'Smart Contract Security'],
  },
  {
    label: 'Frameworks',
    items: ['Hardhat', 'React', 'Express.js', 'Node.js', 'NestJS'],
  },
  {
    label: 'Web',
    items: ['JavaScript', 'HTML / CSS', 'Web3 Wallet Integration', 'REST APIs', 'ABI Integration', 'SQL'],
  },
  {
    label: 'Chains',
    items: ['Ethereum', 'Base Mainnet', 'BNB Smart Chain', 'Sepolia'],
  },
  {
    label: 'Tools',
    items: ['Git / GitHub', 'VS Code', 'CLI', 'GitLab'],
  },
];

export default function Stack() {
  return (
    <section className="stack-section" id="stack">
      <div className="stack-header">
        <div className="stack-eyebrow">Tech Stack</div>
        <p className="stack-sub">The tools I reach for every day.</p>
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
