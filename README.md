# NFT ERC721 Collection
## Fixed and modified by FudgyDRS

This is fixed soludtion for "all-in-one `ERC721` collections" released by HashLips.

### Steps
1. Open your fav terminal/dos
2. Change directories to `hashlips-minting` root directory and input the command `yarn install`
3. Change directories to `hashlips-minting\smart-contract` and input the command `yarn install`
4. Compile your smart contract by inputting the command `yarn compile`
5. Change direcotries to `hashlips-minting\minting-dapp` and input the command `yarn install`
6. Create a local build by inputting the command `yarn dev-server`
7. Copy your solidity contract from `hashlips-minting\smart-contract\contracts\PeculiarPugs.sol`
8. Paste you code into your favorite solidity compiler (I reccomend [Remix](https://remix.ethereum.org) and deploy your contract.
9. Copy your new contract address to `contractAddress` inside of `CollectionConfig.ts`
10. After your satisfied input `ctrl + C` to end the server and input the command `yarn build`
11. Congrats you now have a full build, upload the public folder to your favorite hosting site and you're set (don't forget to add a CNAME file if you want a custom url)

## Below is the rest of hashlips-minting guid (unedited):

## Disclaimer
This project was created for educational purposes, please refer to the [LICENCE](LICENSE) file for further information.

## Main features
- extremely high gas efficiency (users are going to pay lower gas fees compared to traditional collections)
- whitelist support with customizable list size (using a Merkle Tree for verification)
- automated contract verification through block explorers (e.g. Etherscan)
- simple CLI commands that guide you through all the sale steps (whitelist, pre-sale, public sale)
- built as a Hardhat project with TypeScript support for a better development experience
- includes a fully-featured minting DAPP (React + TypeScript + SCSS + Webpack)
- full support for contract interaction through block explorers (e.g. Etherscan), for all the users that do not trust custom DAPPs (including the `whitelistMint(...)` function)
- customizable minting DAPP (from basic branding to complete customization)

## YouTube tutorials

|Lesson ID|Description|Video link|
|---|---|---|
|`01a`|Basic setup on **Windows 10**|https://youtu.be/zjlg-0622PU|
|`01b`|Basic setup on **macOS Catalina (Intel-based)**|https://youtu.be/acqXzKN5Xys|
|`01c`|Basic setup on **Linux**|https://youtu.be/imuqi6Vg3Zw|
|`02`|Speedrun: create and deploy a smart contract + DAPP (v1.x)|https://youtu.be/VpXJZSqLO8A|
|`03`|The smart contract project|https://youtu.be/XToWWExBLXE|
|`04`|The minting DAPP project|https://youtu.be/gs9mVwkn8u4|
|`05`|Configuration and security|https://youtu.be/pkA86GHU_xw|
|`06`|Managing the collection without leaving Visual Studio Code|https://youtu.be/yOVKEeRMJSs|
|`07`|Managing the contract using Truffle Dashboard|https://youtu.be/fwdIA5UuPmM|
|`08`|Running smart contract functions manually on the block explorer|https://youtu.be/zhvTJhBbtnE|

_More videos coming soon..._

## Requirements

### Software
- [Visual Studio Code](https://code.visualstudio.com/) (with the [Solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) extension)
- [NodeJs](https://nodejs.org/) (with the [Yarn package manager](https://yarnpkg.com/getting-started/install))

### Services
- Etherscan free API key _(optional: used for the automated contract verificiation, as well as retrieving the current values for gas cost estimation)_
- Infura free basic plan or higher _(optional: used by the CLI commands in order to perform operations on real blockchains, you can skip this if you deploy and manage your contract manually)_
- Coin Market Cap free API key _(optional: used for retrieving the current token price for gas cost estimation in USD)_
