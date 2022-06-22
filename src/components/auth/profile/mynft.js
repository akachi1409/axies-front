import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Explore1Item from "../../explore/explore1/explore1Item";
import axios from "axios";

import "./mynft.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Mynft() {
  const [firstLoad, setFirstLoad] = useState(true);
  const [data, setData] = useState([]);
  const blockchain = useSelector((state) => state.blockchain);
  let navigate = useNavigate();

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
  useEffect(() => {
    async function fetchData() {
      // console.log(blockchain);
      if (blockchain.account === null) {
        navigate("/");
      }
      const temp = [];
      const url =
        "https://testnets-api.opensea.io/api/v1/assets?owner=" +
        blockchain.account +
        "&offset=0&limit=200";
      axios.get(url).then((res) => {
        // console.log(res);
        // setData(res.data.assets)
        res.data.assets.map((item, index) => {
          // console.log(item, index);
          if (
            item.asset_contract.address ===
            "0xf670640c4a07e2741f53725fb303fccddb2755db"
          ) {
            console.log(item);
            // continue;
          } else {
            temp.push({
              "image": item.image_url,
              "title": item.name,
              "owner": blockchain.account.length > 12 ? blockchain.account.substring(0, 12) + "..." : blockchain.account, 
              "contract": item.asset_contract.address,
              "tokenId": item.token_id,
              "akachiNFT": false
            });
          }
          return <></>;
        });
      });

      const indexes = await blockchain.akachiNFT.methods
        .balanceOfAccount(blockchain.account)
        .call();
      for ( var i = 0 ; i< indexes.length; i++){
        if (indexes[i] ==1){
          const url = await getURL(i+1)
          console.log("url:", url);
          const result = await getNFTs(url.split("https://gateway.pinata.cloud/ipfs/")[1])
          console.log("result:", result.data, );
          var data = result.data;
          // var data = JSON.parse(result.data)
          console.log(data)
          temp.push({ 
            "image": data.image,
            "title": data.name,
            "owner": blockchain.account.length > 12 ? blockchain.account.substring(0, 12) + "..." : blockchain.account, 
            "contract": "0xf670640c4a07e2741f53725fb303fccddb2755db",
            "tokenId": i+1,
            "akachiNFT": true
          })
        }
      }
      // console.log("indexes:", indexes);
      setData(temp);
      setFirstLoad(false);
      console.log(temp);
    }
    if (firstLoad) {
      fetchData();
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstLoad]);
  return (
    <div className="mynft-layout">
      <Container>
        <Row>
          <h2 className="mynft-title">My NFT</h2>
          <p className="mynft-text">You can view your NFTs here.</p>
        </Row>
        <Row>
          {data.length === 0 && (
            <p className="mynft-empty">You have NO NFT at all.</p>
          )}
          {data.map((item, index) => {
            // console.log("item: ", item);
            // var price = item.token.floorAskPrice == null ? "TBD" : item.token.floorAskPrice;
            // var owner =
            //   blockchain.account.length > 12
            //     ? blockchain.account.substring(0, 12) + "..."
            //     : blockchain.account;
            return (
              <Col lg="3" key={index}>
                <Explore1Item
                  image={item.image}
                  title={item.title}
                  // net={item.net}
                  owner={item.owner}
                  contract={item.contract}
                  tokenId={item.tokenId}
                  navable={true}
                  akachiNFT = {item.akachiNFT}
                  // price={price}
                  // priceItem = {item.priceItem}
                  //   bidding={item.bidding}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
export default Mynft;
