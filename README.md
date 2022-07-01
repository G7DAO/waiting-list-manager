## Waitlist & NFT Presale Manager

An easily deployed system for creating and managing game waitlists or NFT pre-sale lists using web 3.0 technologies and fully distributed systems. The waitlist is intended for:
* Game Developers who wish to create a system capable of collecting lists of reliable, motivated players that will play their game when it's first released and are open to playing future games as they are released. 
* Marketing Professionals working in the gaming space who desire to build communities of motivated players on behalf of the game developers.

### Main Features
* On-Chain and Off-Chain Waitlist DAPP Examples
* On-Chain and Off-Chain Waitlist PLUGIN Examples
* Capable of Multi-Chain and Multi-Wallet usage
* Complete Web3 Authentication and Authorization Flows
* [Serverless architecture using Cloudflare Pages](https://pages.cloudflare.com/)
* [Fully CI/CD integrated](https://developers.cloudflare.com/pages/get-started/#connect-to-your-git-provider)
* [Serverless Rest API that's fully integrated with Cloudflare Workers](https://workers.cloudflare.com/) (for off-chain waitlist)
* [Integrated with FaunaDB.](https://docs.fauna.com/fauna/current/) A fully distributed, serverless Database that works perfectly with the Cloudflare Edge Network

### Project Structure

**web-app-offchain**: Fully functional Waitlist with Web3 Auth that is built with React and Cloudflare Pages. It has the following dependencies
  - Off-Chain Waitlist Webapp requires Rest API (see backend)
  - Off-Chain Waitlist Webapp is multi-wallet, multi-chain capable but uses Metamask as the demo 
  - Web3, Ethers, Jsonwebtoken
  - Cloudflare Account & Cloudflare Pages (optional)

**web-app-onchain**: Coming Soon, See [Specification](https://github.com/G7DAO/g7-waiting-list-manager/blob/main/SRS.md).

**plugins**: Coming Soon, See [Specification](https://github.com/G7DAO/g7-waiting-list-manager/blob/main/SRS.md).

**dapp-onchain**: Coming Soon, See [Specification](https://github.com/G7DAO/g7-waiting-list-manager/blob/main/SRS.md).

**backend (optional)**: is a Node.js project that is a fully functioning rest API with Web3 Auth flow that uses a distributed database and a serverless architecture.
  - Cloudflare Account
  - Cloudflare Workers
  - Cloudflare Wrangler
  - FaunaDB

### Attribution

The project may use code fragments and examples found in other projects. Appropriate attribution will be provided anywhere these code fragments are used.   

### License

ISC

### Product Roadmap

The Wait-list & NFT Presale Manager product roadmap follows the [G7 product development guidelines](https://github.com/G7DAO/g7-guidelines).

- [x] Idea - Completion date 05/03/2022
- [x] Specification - Completion due date 06/30/2022
- [x] Off-Chain Waitlist Webapp MVP - Completion due date 06/30/2022
- [ ] Off-Chain Waitlist Webapp Q/A / Polishing / Testing - Completion due date 07/30/2022
- [ ] Off-Chain Waitlist Webapp Documentation - Completion due date 07/30/2022
- [ ] On-Chain Waitlist Webapp MVP - Completion due date 08/30/2022
- [ ] On-Chain Waitlist DAPP MVP - Completion due date 09/30/2022
- [ ] Off-Chain Waitlist Plugin MVP - Completion due date 10/30/2022

### Idea

Q: How do we provide game developers with a list of reliable and motivated players for upcoming game releases.

A: Build a system that allows game developers to build / manage their own wait-lists. Build a system that can be used by marketing professionals to build lists on behalf of the gaming companies.


### Project Specification

Project Specification for the G7 Wait-list & NFT Presale Manager. The specification is open source and can be used by any developer under [The MIT License (MIT)](https://mit-license.org/) 

[ISO/IEC/IEEE 29148:2018 Software Requirements Specification](https://github.com/G7DAO/g7-waiting-list-manager/blob/main/SRS.md).


**TODO**
 - add additional blockchain / wallet examples
 - add user stories to spec
 - add diagrams to spec
 - complete documentation
 - Q/A & testing
 - polish

