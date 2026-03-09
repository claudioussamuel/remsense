# Remsense

A decentralized application combining a Next.js frontend with Solidity smart contracts.

## Overview

Remsense is a Web3 project that includes:
- **Frontend**: A Next.js 16 web application with React 19, TypeScript, and Tailwind CSS
- **Smart Contracts**: Solidity contracts managed with Foundry

## Tech Stack

### Frontend
- **Framework**: Next.js 16
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Components**: Radix UI primitives
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Package Manager**: pnpm

### Smart Contracts
- **Framework**: Foundry
- **Language**: Solidity ^0.8.13
- **Tooling**: Forge, Cast, Anvil

## Project Structure

```
remsense/
├── Remsense Frontend/          # Next.js web application
│   ├── app/                    # App router pages
│   ├── components/             # React components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── public/                 # Static assets
│   ├── styles/                 # Global styles
│   └── package.json
│
└── Remsense Smartcontract/     # Solidity smart contracts
    ├── src/                    # Smart contract source code
    ├── script/                 # Deployment scripts
    ├── test/                   # Contract tests
    ├── lib/                    # Third-party libraries
    └── foundry.toml
```

## Getting Started

### Prerequisites

- **Node.js**: v18+
- **pnpm**: Latest version
- **Foundry**: Install from [foundry.sh](https://book.getfoundry.sh/)

### Frontend Setup

```bash
cd "Remsense Frontend"

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The frontend will be available at `http://localhost:3000`

### Smart Contract Setup

```bash
cd "Remsense Smartcontract"

# Install dependencies
forge install

# Build contracts
forge build

# Run tests
forge test

# Format code
forge fmt
```

## Smart Contract Usage

### Using Forge

**Build:**
```shell
forge build
```

**Test:**
```shell
forge test
```

**Gas Snapshots:**
```shell
forge snapshot
```

**Format:**
```shell
forge fmt
```

### Using Anvil (Local Node)

```shell
anvil
```

### Deploying Contracts

```shell
forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Using Cast

```shell
# Call a contract function
cast call <contract_address> "number()"

# Send a transaction
cast send <contract_address> "increment()" --private-key <your_private_key>

# Get chain information
cast chain-id
cast block-number
cast gas-price
```

## Current Smart Contracts

### Counter.sol

A simple counter contract with the following functions:

```solidity
contract Counter {
    uint256 public number;

    function setNumber(uint256 newNumber) public;
    function increment() public;
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and format code
5. Submit a pull request

## License

MIT

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Foundry Book](https://book.getfoundry.sh/)
- [Solidity Documentation](https://docs.soliditylang.org/)

