# G7 Product Specification
This product spec meets the functional requirements of the ISO/IEC/IEEE 29148:2018 Software Requirements Specification. Non-functional requirements that meet the ISO/IEC/IEEE 29148:2018 specification will be added at a future date as needed. Monday Test Again
# Software Requirements Specification
## For G7 Waiting List & NFT Presale Manager 
Version 0.01 approved by BlocSecNerd for G7 Wait-list Prototype

Prepared by BlocSecNerd - G7 Opensource Engineering Contributor on 03 / 25 / 2022

Table of Contents
=================
  * [Revision History](#revision-history)
  * [Introduction](#1-introduction)
    * 1.1 [Purpose](#11-purpose)
    * 1.2 [Document Conventions](#12-document-conventions)
    * 1.3 [Intended Audience and Reading Suggestions](#13-intended-audience-and-reading-suggestions)
    * 1.4 [Product Scope](#14-product-scope)
    * 1.5 [References](#15-references)
  * [Overall Description](#overall-description)
    * 2.1 [Product Perspective](#21-product-perspective)
    * 2.2 [Product Functions](#22-product-functions)
    * 2.3 [User Classes and Characteristics](#23-user-classes-and-characteristics)
    * 2.4 [Operating Environment](#24-operating-environment)
    * 2.5 [Design and Implementation Constraints](#25-design-and-implementation-constraints)
    * 2.6 [User Documentation](#26-user-documentation)
    * 2.7 [Assumptions and Dependencies](#27-assumptions-and-dependencies)
  * [External Interface Requirements](#external-interface-requirements)
    * 3.1 [User Interfaces](#31-user-interfaces)
    * 3.2 [Hardware Interfaces](#32-hardware-interfaces)
    * 3.3 [Software Interfaces](#33-software-interfaces)
    * 3.4 [Communications Interfaces](#34-communications-interfaces)
  * [System Features](#system-features)
    * 4.1 [System Feature 1](#41-system-feature-1)
    * 4.2 [System Feature 2 (and so on)](#42-system-feature-2-and-so-on)
  * [Other Nonfunctional Requirements](#other-nonfunctional-requirements)
    * 5.1 [Performance Requirements](#51-performance-requirements)
    * 5.2 [Safety Requirements](#52-safety-requirements)
    * 5.3 [Security Requirements](#53-security-requirements)
    * 5.4 [Software Quality Attributes](#54-software-quality-attributes)
    * 5.5 [Business Rules](#55-business-rules)
  * [Other Requirements](#other-requirements)
* [Appendix A: Glossary](#appendix-a-glossary)
* [Appendix B: Analysis Models](#appendix-b-analysis-models)
* [Appendix C: To Be Determined List](#appendix-c-to-be-determined-list)




## Revision History
| Name         | Date       | Reason For Changes | Version |
|--------------|------------|--------------------|---------|
| Hello World | 03/26/2022 |   Initial Commit   | v0.01 |
|              |            |                    |         |
|              |            |                    |         |

## 1. Introduction
### 1.1 Purpose 
Build an easily deployable, open source product that enables game developers to create and manage player waiting lists or NFT pre-sale lists using web 3.0 technologies.
### 1.2 Document Conventions
* Dependencies are displayed as _italic_
* Priority items are displayed as **bold**
* All corrections, changes or additions should be pushed to a separate branch with a PR.
* All removed or changed items must be left in place with a ~~line through the removed items~~ 
* All corrections should follow the corrected text and should be enclosed with curly brackets. ~~old text~~ {new text} 
* Any reference to versioning will follow semantic versioning guidelines. See reference.
### 1.3 Intended Audience and Reading Suggestions
The intended audience for this specification is any game developer who wishes to create a web 3.0 waiting-list for their game. Other audiences that may benefit from this specification are NFT Creators, Crypto Marketing Developers, DeFi Developers or other Web 3.0 Developers wishing to create a waiting list for a project.  
### 1.4 Product Scope
This product has several important properties or areas of concern.
* Interface for building player lists for your game. Deployed as a Dapp or integrated into your existing app.
* Interface for monitoring and interacting with player lists. Deployed as a Dapp or integrated into your existing app.
* Programmatic monitoring of lists and interacting with player lists via CLI & API.
* Player incentive system that create incentives for players to join your lists. Including NFT giveaway or pre-sale.
* Smart Contract and Blockchain deployment.
* Rewards systems such as discord badges, early access to other projects, etc
* 3rd party integration such as discord, twitter, etc
### 1.5 References
TODO
* [Semantic Versioning 2.0.0](https://semver.org/)
## Overall Description
### 2.1 Product Perspective
This product is a stand-alone, open sourced project that is designed to give game developers and marketing developers the tools needed to create and manage lists of players waiting to gain access to a specific game using web 3.0 technologies. Developers can pick and choose how much of the project they wish to implement. From the most basic installation that just uses smart contracts to an advanced installation that includes all the bells and whistles. The project uses a decentralized architecture to create and store lists.     
### 2.2 Product Functions
Summary of the primary functions performed by this product.
* Smart Contracts. Choose from several smart contracts you wish to use as is or that you wish to build on.
* Blockchain. Choose which blockchain you wish to deploy your contract on.
* List Builder Dapp. Can be deployed as is or customized. We provide code samples that allow you to integrate the list builder into your existing app.
* List Manager Dapp. Can be deployed as is or customized. We provide code samples that allow you to integrate the list manager into your existing app.
* List Builder & Manager API. Launch the List Builder & the List Manager as an API that you can use with existing projects. 
* Player incentive system. Add incentives for players to join your lists. Including NFT giveaway or pre-sale.
* Player Rewards systems. Add rewards to players who stay on your lists such as discord badges, early access to other projects, etc
* Discord community systems. Convert waiting list into Discord community through additional incentives and interaction.
* 3rd party integrations such as discord, twitter, etc
* Automated Deployment. We have built in deployment functionality that can assist in automated deployment of all the systems.
* End 2 End tests. Pre-Deployment E2E testing is provided to ensure the systems you deploy are running smoothly.
### 2.3 User Classes and Characteristics
There are 3 primary user classes the product is designed for.
* Game Players who want early access to a game and are willing to provide wallet and/or contact information to gain early access.
* Game Developers who want a list of reliable, motivated players that will play their game when it's first released and are open to playing future games as they are released. 
* Marketing Professionals working in the gaming space who desire to build communities of motivated players on behalf of the game developers.  
### 2.4 Operating Environment
The product, in its most minimalistic form, is designed operate from a Blockchain capable of managing smart contracts in an inexpensive manner. We recommend the following Blockchains (example contracts are provided):
* Solana
* Avalanche
* Polygon
* Fantom
* Binance Smart Chain 

The advanced features of the product are designed to **support** the main Blockchain features. The optional Backend and Frontend UI elements are designed to interact with the smart contract / blockchain functionality. The BE / FE UI elements can be hosted in any cloud environment or run as Dapps. The optional incentive systems, reward systems and 3rd party integrations will require cloud hosting.    
### 2.5 Design and Implementation Constraints
Some incentives or rewards may not be profound enough to drive adoption. Use the incentives or rewards examples provided as guides. The blockchain and smart contract examples provided may not meet your needs, use the ones provided as guides. UI (Dapp) code examples are optional and are not required. Cloud or local hosting is required for incentive systems.    
### 2.6 User Documentation
TODO
* documentation under development
### 2.7 Assumptions and Dependencies
Assumptions
* TODO

Dependencies
* Blockchain provider
* Wallet
* Docker (if running locally)
* Cloud Provider (advanced features)
## External Interface Requirements
### 3.1 User Interfaces
TODO

Describe the logical characteristics of each interface between the software product and the users. This may include sample screen images, any GUI standards or product family style guides that are to be followed, screen layout constraints, standard buttons and functions (e.g., help) that will appear on every screen, keyboard shortcuts, error message display standards, and so on.
### 3.2 Hardware Interfaces
TODO

Describe the logical and physical characteristics of each interface between the software product and the hardware components of the system. This may include the supported device types, the nature of the data and control interactions between the software and the hardware, and communication protocols to be used.
### 3.3 Software Interfaces
TODO

Describe the connections between this product and other specific software components (name and version), including databases, operating systems, tools, libraries, and integrated commercial components. Identify the data items or messages coming into the system and going out and describe the purpose of each. Describe the services needed and the nature of communications. Refer to documents that describe detailed application programming interface protocols. Identify data that will be shared across software components. If the data sharing mechanism must be implemented in a specific way (for example, use of a global data area in a multitasking operating system), specify this as an implementation constraint.
### 3.4 Communications Interfaces
TODO

Describe the requirements associated with any communications functions required by this product, including e-mail, web browser, network server communications protocols, electronic forms, and so on. Define any pertinent message formatting. Identify any communication standards that will be used, such as FTP or HTTP. Specify any communication security or encryption issues, data transfer rates, and synchronization mechanisms.
## System Features
Each system feature will be listed in the order in which it's developed (priority) and released. Features can be added in the backlog in the order they are listed. 
### 4.1 (v0.01) EVM Smart Contract Examples
The goal of this iteration is produce several smart contract examples that can be run on an EVM compatible blockchain in a test environment such as remix.ethereum.org. The smart contracts will possess the following features:
* Set Start Date/Time & End Date/Time
* Set Gas Fee
* Add ability to validate, collect and store whitelisted wallet addresses
* Add ability to remove a wallet address from the list
* NFT Mint Function for whitelisted addresses (optional)

4.1.1   Description - TODO

4.1.2   Functional Requirements- TODO

4.1.3   User Stories - TODO

4.1.4   Dependencies - TODO

4.1.5   Influences and Attribution:
* [HashLips Smart Contracts](https://github.com/HashLips/solidity_smart_contracts)

### 4.2 (v0.02) EVM Blockchain Examples
TODO

## Other Nonfunctional Requirements
### 5.1 Performance Requirements
TODO

If there are performance requirements for the product under various circumstances, state them here and explain their rationale, to help the developers understand the intent and make suitable design choices. Specify the timing relationships for real time systems. Make such requirements as specific as possible. You may need to state performance requirements for individual functional requirements or features.
### 5.2 Safety Requirements
TODO

Specify those requirements that are concerned with possible loss, damage, or harm that could result from the use of the product. Define any safeguards or actions that must be taken, as well as actions that must be prevented. Refer to any external policies or regulations that state safety issues that affect the product’s design or use. Define any safety certifications that must be satisfied.
### 5.3 Security Requirements
TODO

Specify any requirements regarding security or privacy issues surrounding use of the product or protection of the data used or created by the product. Define any user identity authentication requirements. Refer to any external policies or regulations containing security issues that affect the product. Define any security or privacy certifications that must be satisfied.
### 5.4 Software Quality Attributes
TODO

Specify any additional quality characteristics for the product that will be important to either the customers or the developers. Some to consider are: adaptability, availability, correctness, flexibility, interoperability, maintainability, portability, reliability, reusability, robustness, testability, and usability. Write these to be specific, quantitative, and verifiable when possible. At the least, clarify the relative preferences for various attributes, such as ease of use over ease of learning.
### 5.5 Business Rules
TODO

List any operating principles about the product, such as which individuals or roles can perform which functions under specific circumstances. These are not functional requirements in themselves, but they may imply certain functional requirements to enforce the rules.

## Other Requirements
TODO

Define any other requirements not covered elsewhere in the SRS. This might include database requirements, internationalization requirements, legal requirements, reuse objectives for the project, and so on. Add any new sections that are pertinent to the project.
### Appendix A: Glossary
TODO

Define all the terms necessary to properly interpret the SRS, including acronyms and abbreviations. You may wish to build a separate glossary that spans multiple projects or the entire organization, and just include terms specific to a single project in each SRS.
### Appendix B: Analysis Models
TODO

Optionally, include any pertinent analysis models, such as data flow diagrams, class diagrams, state-transition diagrams, or entity-relationship diagrams.
### Appendix C: To Be Determined List
TODO

Collect a numbered list of the TBD (to be determined) references that remain in the SRS so they can be tracked to closure.