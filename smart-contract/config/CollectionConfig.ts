import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  fantomTestnet: Networks.fantomTestnet,
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'PeculiarPugs',
  tokenName: 'My NFT Token',
  tokenSymbol: 'MNT',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.1,
    maxMintAmountPerTx: 20,
  },
  preSale: {
    price: 0.1,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 20,
  },
  contractAddress: "0xe707a98108C31C77dDee267fDe07EFC8A8Bf86cc",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
