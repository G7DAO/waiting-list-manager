import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import Web3Token from 'web3-token';
import Navigation from "../components/navigation";
import Header from "../components/header";
import Input from "../components/input";
import TextArea from "../components/text-area";
import Form from "../components/form";
import Layout from "../components/layout";

// API Imports
import { _waitlist } from "../_api"

import Footer from "../components/footer";
import { Button } from "../components/form/styles";

const Submit = () => {
  const [ isLoggedin, setLoggedin ] = useState(false);
  const [
    waitlist,
    setWaitlist,
  ] = useState({
    public_address: "",
    discord: "",
    name: "",
    email: "",
    description: "",
  });

  useEffect(() => {
    const authToken = Cookies.get('g7-auth');
    if(authToken) {
      setLoggedin(true)
    }
  }, []);

  const createWaitListEntry = async () => {
    if (!isLoggedin) {
      alert('you need to re-sign your transaction')
      return
    }

    const authToken = Cookies.get('g7-auth');
    const { token, signed_msg } = JSON.parse(authToken)
    const { address } = await Web3Token.verify(signed_msg);
    waitlist.public_address = address

    // create waitlist entry via the api
    const resp = _waitlist.createWaitListEntry(waitlist, token)
    resp.then((r) =>{
      if(r.status === 201 || r.status === 200){
          return r.json()
      }
    }).then(() => {
      alert("waitlist entry submitted successfully")
      logout()
    }).catch(() => {
      alert('waitlist entry submission error')
    })
  }

  const logout = () => {
    Cookies.remove('g7-auth')
    setLoggedin(false)
    window.location.reload();
  }

  return (
    <>
      <Navigation />
      <Header
        title="Join Our Waitlist"
        description="Eaque nihil sapiente modi. Odio vel qui temporibus nemo quos. Dignissimos et repudiandae vel sit dolores sed. Quo suscipit voluptas aut non et ad rerum reiciendis. Ea ut tempore odit. Repudiandae maiores facere dolorem unde fuga officia magni sit."
      />
      <Layout>
        <Form>
          <Input
            label="Discord Handle"
            placeholder="Provide your discord handle"
            value={waitlist.discord || ''}
            onChange={e => {
              setWaitlist(prevState => {
                return { ...prevState, discord: e.target.value }
              });
            }}
          />
          <Input
            label="Name"
            placeholder="What do we call you?"
            value={waitlist.name || ''}
            onChange={e => {
              setWaitlist(prevState => {
                return { ...prevState, name: e.target.value }
              });
            }}
          />
          <Input
            label="Email"
            placeholder="Email address used for confirmation.."
            value={waitlist.email || ''}
            onChange={e => {
              setWaitlist(prevState => {
                return { ...prevState, email: e.target.value }
              });
            }}
          />
          <TextArea
            label="Description"
            placeholder="Why are you interested in our project?"
            value={waitlist.description}
            onChange={e => {
              setWaitlist(prevState => {
                return { ...prevState, description: e.target.value }
              });
            }}
          />
          <Button onClick={createWaitListEntry}>Submit</Button>
        </Form>
      </Layout>

      <Footer />
    </>
  );
};

export default Submit;
