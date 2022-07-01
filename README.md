## Waitlist & NFT Presale Manager

An easily deployed system for creating and managing game waitlists or NFT pre-sale lists using web 3.0 technologies and cutting edge distributed systems. This system is intended for:
* Game Developers who wish to create a system capable of collecting lists of reliable, motivated players that will play their game when it's first released and are open to playing future games as they are released. 
* Marketing Professionals working in the gaming space who desire to build communities of motivated players on behalf of the game developers.

### Main Features
* On-Chain and Off-Chain Waitlist Examples
* Multi-Chain / Multi-Wallet Capable
* Web3 Authentication Flow
* [Serverless architecture using Cloudflare Pages](https://pages.cloudflare.com/)
* [Fully CI/CD integrated](https://developers.cloudflare.com/pages/get-started/#connect-to-your-git-provider)
* [Serverless Rest API that's fully integrated with Cloudflare Workers](https://workers.cloudflare.com/) (for off-chain waitlist)
* [Integrated with FaunaDB.](https://docs.fauna.com/fauna/current/) A fully distributed, serverless Database that works perfectly with the Cloudflare Edge Network

### Project Structure

Waitlist is a React project with the following dependencies
  - Off-Chain Waitlist requires Rest API (see backend)
  - On-Chain Waitlist requires EVM compatible blockchain (more chains coming)
  - Web3, Ethers, Jsonwebtoken
  - Cloudflare Account & Cloudflare Pages (optional)

Backend (optional) is a Node.js project
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
- [x] Specification - Completion due date 05/30/2022
- [x] MVP - Completion due date 06/30/2022
- [ ] Q/A / Polishing / Testing - Completion due date 07/30/2022
- [ ] Documentation - Completion due date 07/30/2022
- [ ] Production - Not scheduled

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

