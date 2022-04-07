import {useAddress, useDisconnect, useMetamask} from "@thirdweb-dev/react";
import './styles.css';
import React from "react";

const createForms = () => {
  const ThirdWebOnChainL1 = () => {
    const address = useAddress();
    const connectWithMetamask = useMetamask();
    const disconnectWallet = useDisconnect();

    return (
      <form action="/">
        <p>
          This is a Player List Generator that connects to a Metamask Wallet and uses the Ethereum Blockchain  (L1) to store the player list.
        </p>
        <hr />
        <label id="icon" htmlFor="name"><i className="fas fa-envelope"></i></label>
        <input type="text" name="name" id="name" placeholder="Email" required/>
        <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Name" required/>
        <hr />
        <div className="btn-block">
          {address ? (
            <>
              <button onClick={disconnectWallet}>Disconnect Wallet</button>
              <p>Your address: {address}</p>
            </>
          ) : (
            <button onClick={connectWithMetamask}>Connect with Metamask</button>
          )}
        </div>
      </form>
    )
  };

  const ThirdWebOnChainL2 = () => {
    const address = useAddress();
    const connectWithMetamask = useMetamask();
    const disconnectWallet = useDisconnect();

    return (
      <form action="/">
        <p>
          This is a Player List Generator that connects to a Metamask Wallet and uses the Polygon Blockchain (L2) to store the player list.
        </p>
        <hr />
        <label id="icon" htmlFor="name"><i className="fas fa-envelope"></i></label>
        <input type="text" name="name" id="name" placeholder="Email" required/>
        <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Name" required/>
        <hr />
        <div className="btn-block">
          {address ? (
            <>
              <button onClick={disconnectWallet}>Disconnect Wallet</button>
              <p>Your address: {address}</p>
            </>
          ) : (
            <button onClick={connectWithMetamask}>Connect with Metamask</button>
          )}
        </div>
      </form>
    )
  };

  const OffChainWithWallet = () => {
    const address = useAddress();
    const connectWithMetamask = useMetamask();
    const disconnectWallet = useDisconnect();
    return (
      <form action="/">
        <p>
          This is a Player List Generator that connects to a Metamask Wallet, collects the wallet signature and uses a hosted database to store the player list.
        </p>
        <hr />
        <label id="icon" htmlFor="name"><i className="fas fa-envelope"></i></label>
        <input type="text" name="name" id="name" placeholder="Email" required/>
        <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Name" required/>
        <hr />
        <div className="btn-block">
        {address ? (
          <>
            <button onClick={disconnectWallet}>Disconnect Wallet</button>
            <p>Your address: {address}</p>
          </>
        ) : (
          <button onClick={connectWithMetamask}>Connect with Metamask</button>
        )}
        </div>
      </form>
    )
  };

  const OffChainNonWallet = () => {

    return (
      <form action="/">
        <p>
          This is a Player List Generator that uses a hosted database to store the player list. Nothing else.
        </p>
        <hr />
        <label id="icon" htmlFor="name"><i className="fas fa-envelope"></i></label>
        <input type="text" name="name" id="name" placeholder="Email" required/>
        <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Name" required/>
        <label id="icon" htmlFor="name"><i className="fas fa-unlock-alt"></i></label>
        <input type="text" name="address" id="address" placeholder="ethereum address: 0x.." required/>
        <hr />
        <div className="btn-block">
          <button type="submit" href="/">Submit</button>
        </div>
      </form>
    )
  };

  return {
    ThirdWebOnChainL1,
    ThirdWebOnChainL2,
    OffChainWithWallet,
    OffChainNonWallet,
  };
}

export default createForms();
