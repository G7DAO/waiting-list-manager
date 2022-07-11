import { useEffect, useState } from "react";
import Web3Token from "web3-token";
import { ethers } from "ethers";
import Cookies from "js-cookie";

// API Imports
import { _user } from "../../_api";

// Relative Imports
import {
  Container,
  Title,
  Description,
  Content,
  Fill,
  Outline,
  Section,
} from "./styles";

const Hero = () => {
  const [isLoggedin, setLoggedin] = useState(false);
  const [address, setAddress] = useState("");
  const [buttonSetting, setButtonSetting] = useState(0);

  useEffect(() => {
    const authToken = Cookies.get("g7-auth");
    if (authToken) {
      setLoggedin(true);
      setButtonSetting(2);
    }
    metaMaskClientCheck();
  }, []);

  //Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const metaMaskClientCheck = () => {
    //Now we check to see if MetaMask is installed
    if (!isMetaMaskInstalled()) {
      //If it isn't installed we ask the user to click to install it
      setButtonSetting(0);
    } else {
      if (isLoggedin && address !== "") {
        // If logged in and address set, we change our button text
        setButtonSetting(2);
      } else {
        setButtonSetting(1);
      }
    }
  };

  const connect = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = addressArray[0];
        const signed_msg = await Web3Token.sign(
          async (msg) => await signer.signMessage(msg),
          address,
          "1d"
        );

        // create user via the api
        const resp = _user.createUser(signed_msg);
        resp
          .then((r) => {
            if (r.status === 201 || r.status === 200) {
              return r.json();
            }
          })
          .then((_r) => {
            const one_hour = new Date(new Date().getTime() + 3600 * 1000); // sign token for 1 hour
            const { token } = _r.data;
            if (token === undefined) {
              alert("MetaMask connect error");
              return;
            }

            const setToken = JSON.stringify({ token, signed_msg });
            Cookies.set("g7-auth", setToken, { expires: one_hour });
            setCredential(address); // set auth credentials
          })
          .catch((e) => {
            //console.log(e.message)
            alert("MetaMask connect error");
          });
      } catch (err) {
        //console.log(err.message)
        alert("MetaMask connect error");
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  const setCredential = (address) => {
    setLoggedin(true);
    setAddress(address);
    setButtonSetting(2);
  };

  const getButton = () => {
    switch (buttonSetting) {
      case 1:
        return <Fill onClick={connect}>{"Connect Wallet"}</Fill>;
      case 2:
        return <Fill href="/submit">{"Join Waitlist"}</Fill>;
      default:
        return <Fill onClick={connect}>{"Install MetaMask!"}</Fill>;
    }
  };

  const logout = () => {
    Cookies.remove("g7-auth");
    setLoggedin(false);
    setAddress("");
    metaMaskClientCheck();
  };

  return (
    <Container>
      <Content>
        <Title>G7 WAITLIST</Title>
        <Description>
          The G7 community is an invite-only community for web3 gaming
          enthusiasts
        </Description>
        <Section>
          <Outline to="" onClick={logout}>
            Learn More
          </Outline>
          {getButton()}
        </Section>
        <Description>
          Authenticated: {isLoggedin ? "True" : "False"}
          <br />
          Address: {address}
        </Description>
      </Content>
    </Container>
  );
};

export default Hero;
