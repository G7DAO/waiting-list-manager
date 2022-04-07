import React, { Component } from 'react';
import { library } from "../../components/forms";
import './styles.css';

const ThirdWebOnChainL1 = library.ThirdWebOnChainL1
const ThirdWebOnChainl2 = library.ThirdWebOnChainL2
const OffChainNonWallet = library.OffChainNonWallet
const OffChainWithWallet = library.OffChainWithWallet

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "ocl1",
    };
  }

  handlePages = () => {
    const { page } = this.state
    if (page === "ocl1") {
      return <ThirdWebOnChainL1 />
    } else if (page === "ocl2") {
      return <ThirdWebOnChainl2 />
    } else if (page === "ocw") {
      return <OffChainWithWallet />
    } else if (page === "ocww") {
      return <OffChainNonWallet />
    } else {
      return <div>nothing found</div>
    }
  }

  handlePageSelect = (page) => {
    this.setState({page})
  }

  render() {
    const page = this.handlePages()
    return (
      <div>
        <div className="center">
          <ul className="horizontal-list">
            <li onClick={() => this.handlePageSelect("ocl1")}>On Chain - Layer 1</li>
            <li onClick={() => this.handlePageSelect("ocl2")}>On Chain - Layer 2</li>
            <li onClick={() => this.handlePageSelect("ocw")}>Off Chain with Wallet</li>
            <li onClick={() => this.handlePageSelect("ocww")}>Off Chain without Wallet</li>
          </ul>
        </div>
        {page}
      </div>
    )
  }
}

export default HomePage;