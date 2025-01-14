import { defineChain } from '../../utils/chain/defineChain.js'

export const defichainEvmTestnet = /*#__PURE__*/ defineChain({
  id: 1131,
  network: 'defichain-evm-testnet',
  name: 'DeFiChain EVM Testnet',
  nativeCurrency: {
    name: 'DeFiChain',
    symbol: 'DFI',
    decimals: 8,
  },
  rpcUrls: {
    default: {
      http: ['https://eth.testnet.ocean.jellyfishsdk.com'],
    },
    public: {
      http: ['https://eth.testnet.ocean.jellyfishsdk.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'DeFiScan',
      url: 'https://meta.defiscan.live/?network=TestNet',
    },
    blockscout: {
      name: 'Blockscout',
      url: 'https://blockscout.testnet.ocean.jellyfishsdk.com',
    },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 156462,
    },
  },
  testnet: true,
})
