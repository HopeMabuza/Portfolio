// All portfolio text lives here. Edit content in this file only.

export const intro =
  "I build secure, upgradeable smart contracts and the backend APIs behind them. I've shipped five production systems as a freelancer, including two platforms live on BNB Chain mainnet.";

export const availability =
  'Open to backend, smart contract and blockchain developer roles. Remote, hybrid or in-person in Johannesburg, and open to relocation.';

export const links = {
  email: 'hopemabuzadev@gmail.com',
  linkedin: 'https://linkedin.com/in/hope-mabuza',
  github: 'https://github.com/HopeMabuza',
  journal: 'https://blockchain-journal-hope-mabuza.gitbook.io/blockchain-journal-hope-mabuza-docs/',
};

export const projects = [
  {
    id: 'growfi',
    title: 'GrowFi',
    tagline: 'Stablecoin yield protocol, live on Base Mainnet',
    meta: 'WeThinkCode_ capstone · Team project · 2026',
    hasScreenshot: true,
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
    note: null,
  },
  {
    id: 'portal',
    title: 'Training Programme Portal',
    tagline: 'Wallet sign-in and API for a blockchain developer training programme, live in production',
    meta: 'Freelance client project · Team project · 2026',
    hasScreenshot: false,
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

export const skills = [
  { label: 'Smart contracts', items: 'Solidity, Hardhat, OpenZeppelin, UUPS upgradeable contracts, ERC-20, ERC-721, ERC-1155, ERC-4337, reentrancy protection, access control, The Graph, IPFS (Pinata)' },
  { label: 'Backend', items: 'Node.js, Express.js, NestJS, REST APIs, MongoDB, Mongoose, Prisma, JWT/Passport, role-based access control, Sign-In with Ethereum, magic-link login' },
  { label: 'Web3 integration', items: 'ethers.js, viem, wagmi, Reown AppKit' },
  { label: 'Testing & docs', items: 'Hardhat/Chai, Jest, TDD, OpenAPI 3.0, Swagger, Mintlify' },
  { label: 'Languages', items: 'TypeScript, JavaScript, Solidity, Python, Java' },
  { label: 'Networks', items: 'BNB Chain, Base, Ethereum Sepolia' },
  { label: 'Tools', items: 'Git, GitHub, GitLab, Agile/Scrum' },
  { label: 'Frontend (working knowledge)', items: 'React, Next.js, Vite' },
];

export const experience = [
  { title: 'Freelance Full-Stack Developer', org: "Africa's Blockchain Club", period: 'Mar 2026 – Present', desc: 'Backend and smart contract work for clients across DeFi, Web3 payments and web platforms. Five production systems shipped, including two live on BNB Chain mainnet.' },
  { title: 'Blockchain Developer Cohort Member', org: "Africa's Blockchain Club", period: 'Jan 2026 – Mar 2026', desc: 'Full-stack blockchain training: Solidity, Hardhat testing and backend integration. Moved into paid freelance work within two months.' },
  { title: 'Team1 Collaborator', org: 'Avalanche Team1', period: 'Aug 2026 – Present', desc: 'Help host community events and deliver workshops to grow the Avalanche developer community.' },
  { title: 'Blockchain Training Facilitator', org: 'University of Johannesburg', period: '2026', desc: 'Delivered a guest lecture and Solidity sessions for the SA-Swiss Bilateral Research Chair in Blockchain Technology, covering Ethereum, dApps and real-world use cases with hands-on coding.' },
  { title: 'Work Readiness Facilitator', org: 'WeThinkCode_', period: 'Sep 2025 – May 2026', desc: 'Coached fellow students through mock interviews and ran sessions on communication, professionalism and teamwork.' },
  { title: 'Software Development Programme', org: 'WeThinkCode_, Johannesburg', period: '2025 – 2026', desc: 'Completed the 16-month project-based programme (Letter of Completion, July 2026). Python, Java, OOP, TDD, web development and blockchain.' },
  { title: 'Hackathon: Ubuntu Health Vault', org: 'W3Node Hackathon', period: 'Jan 2026', desc: 'Prototype of a patient-owned medical records platform for South African patients, including consent by SMS/USSD for people with feature phones. Designed with POPIA in mind.' },
  { title: 'Hackathon: Stru', org: 'Dev3Pack Hackathon', period: 'May 2026', desc: 'Prototype of a goal-accountability app where friends stake into a shared pool and AI checks proof that each goal was completed.' },
];
