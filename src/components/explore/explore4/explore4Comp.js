import "./explore4Comp.css";

import React, { useState, useEffect }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import delay from "delay";
import axios from "axios";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//Explore all the possible collections
import Explore4Item from "../explore4/explore4Item";

function Explore4Comp(){

  let navigate = useNavigate();

  const blockchain = useSelector((state) => state.blockchain);
  const [firstLoad, setFirstLoad] = useState(true);
  const [nfts, setNfts] = useState([])
  const [loading, setLoading] = useState(false);

  const notify = (msg) => toast(msg);
  const getURL = (i) =>{
    return getURLPromise(i);
  }

  const getURLPromise = (i) =>{
    return new Promise ((resolve) =>{
      return resolve(blockchain.akachiNFT.methods._tokenURI(i).call())
    })
  }

  const getNFTs = (url) =>{
    return getNFTPromise(url)
  }

  const getNFTPromise = (url) =>{
    return new Promise ((resolve) => {
      return resolve(
        axios.get(url)
      )
    })
  }

  useEffect(()=>{
    async function getData(){
      if (firstLoad) {
        setLoading(true);
        if (blockchain.account === null) {
          notify("You should connect wallet to create item!")
          await delay(2000);
          navigate("/");
          return;
        }
        const totalCount = await blockchain.akachiNFT.methods.getTokenCount().call();
        console.log("---totalCount: " + totalCount)
        var temp = []
        for (var i = 1 ; i<=totalCount; i++){
          const url = await getURL(i)
          const result = await getNFTs(url.split("https://gateway.pinata.cloud/ipfs/")[1])
          console.log("result:", result.data, );
          var data = result.data;
          temp.push({
            "image": data.image,
            "title": data.name,
            "description": data.description,
            "contract": process.env.REACT_APP_AKACHI_NFT_CONTRACT,
            "tokenId": i,
            "akachiNFT": "true"
          })
        }
        setNfts(temp);
        setFirstLoad(false)
        setLoading(false);
      }
    }
    getData();
    //eslint-disable-next-line
  }, [firstLoad])
  return (
    <div className="explore4Comp-layout">
      <Container>
        <div className="explore4Comp-title-layout">
          <h2 className="explore4Comp-title">Last 15 Legacies</h2>
          <div className="bottomBar"></div>
        </div>
        {loading && (
          <div className="auctionComp-loading">
            <ReactLoading type="bars" color="#fff" />
          </div>
        )}
        <Row>
          {nfts.map((item, index) => {
            return (
              <Col lg="3" sm="4" key={index} style={{padding: "1em"}}>
                <Explore4Item
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  navable={false}
                  akachiNFT= {true}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}
export default Explore4Comp;
