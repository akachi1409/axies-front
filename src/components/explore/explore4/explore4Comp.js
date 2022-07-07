import "./explore4Comp.css";

import React, { useState, useEffect }  from "react";
import { Container, Row, Col } from "react-bootstrap";

import axios from "axios";
// import FilterItem2 from "./fliterItem2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//Explore all the possible collections
import Explore1Item from "../explore1/explore1Item";

function Explore4Comp(){

  let navigate = useNavigate();

  const blockchain = useSelector((state) => state.blockchain);
  const [firstLoad, setFirstLoad] = useState(true);
  const [nfts, setNfts] = useState([])

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
        if (blockchain.account === null) {
          navigate("/");
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
            "contract": process.env.REACT_APP_AKACHI_NFT_CONTRACT,
            "tokenId": i,
            "akachiNFT": "true"
          })
        }
        setNfts(temp);
        setFirstLoad(false)
      }
    }
    getData();
    //eslint-disable-next-line
  }, [firstLoad])
  return (
    <div className="explore4Comp-layout">
      <Container>
        <Row>
          <h2 className="explore4Comp-title">Last 15 collections</h2>
        </Row>
        <Row>
          {nfts.map((item, index) => {
            return (
              <Col lg="4" key={index} style={{padding: "1em"}}>
                <Explore1Item
                  title={item.title}
                  image={item.image}
                  net="BSC"
                  // owner={owner}
                  // price="Current Bid"
                  // priceItem="4.89ETH"
                  bidding={false}
                  navable={false}
                  akachiNFT= {true}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
export default Explore4Comp;
