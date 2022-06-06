import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import WalletItem from "./walletItem";
import "./walletComp.css";
import MetaImg from "../../assets/wallet/metamask.png";
import CoinImg from "../../assets/wallet/coinbase.png";

import { useSelector } from "react-redux";
function WalletComp() {
  const data = [
    {
      img: MetaImg,
      wallet: "MetaMask",
      text: "MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension to interact with Dapps.",
    },
    {
      img: CoinImg,
      wallet: "Coinbase Wallet",
      text: "Coinbase Wallet is a self-custody crypto wallet, putting you in control of your crypto, keys, and data. Now you can safely store your crypto and rare NFTs in your Coinbase wallet.",
    },
  ];

  // const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);

  // console.log("blockchain", blockchain);
  return (
    <div className="walletComp-layout">
      <Container>
        {blockchain.account === null  ? (
          <div>
            <Row>
              <h2 className="walletComp-title">Connect Wallet</h2>
            </Row>
            <Row>
              <p className="walletComp-text">
                Connect your Metamask wallet or Coinbase wallet!
              </p>
            </Row>
            <Row>
              {data.map((item, index) => (
                <Col lg="6" key={index}>
                  <WalletItem
                    img={item.img}
                    wallet={item.wallet}
                    text={item.text}
                  />
                </Col>
              ))}
            </Row>
          </div>
        ) : (
          <Row>
            <h2 className="walletComp-title">{blockchain.wallet} is connected.</h2>
            <p className="walletComp-text">
                {blockchain.account}
              </p>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default WalletComp;
