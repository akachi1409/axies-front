import "./createItemComp.css";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TagImg from "../../../assets/item/tag.png";
import ClockImg from "../../../assets/item/clock.png";

import Input1 from "../../../basic/button/input1";
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

function CreateItemComp() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [flag, setFlag] = useState(true);
  const [mintMethod, setMintMethod] = useState(0);
  const [dayTo, setDayTo] = useState(0);
  const [royalty, setRoyalty] = useState(0);

  const blockchain = useSelector((state) => state.blockchain);
  let navigate = useNavigate();

  const notify = (msg) => toast(msg);

  const handleFile = (e) => {
    console.log("e", e);
    if (e.target.files.length === 0) return;
    var file = e.target.files[0];
    var reader = new FileReader();
    /* eslint-disable */
    var url = reader.readAsDataURL(file);
    /* eslint-disable */
    reader.onloadend = function () {
      setImage(reader.result);
      setFlag(!flag);
    };
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const onCreate = async () => {
    notify(name + description + royalty);
    const royaltyT = parseInt(royalty)
    if (name === "" || description === "") {
      notify("You should input the name and descrition to create new NFT!");
      return;
    }
    if (mintMethod ===1  && dayTo === 0 ){
      notify("You should input the days to reveal in Hidden Mint Mode.");
      return;
    }
    if (royaltyT > 100 || royaltyT <0) {
      notify("Royalty should be between 0 and 100.");
      return;
    }
    if ( !Number.isInteger(royaltyT)){
      notify("Royalty should be integer.");
      return;
    }
    try {
      notify("Uploading to IPFS is started");
      const added = await client.add(image, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      /* first, upload to IPFS */
      console.log("image Url", url);
      notify("Image is uploaded successfully to IPFS.");
      var data;
      if (mintMethod === 0 ) 
        data = JSON.stringify({
          name,
          description,
          image: url,
          time: 0,
          createTime: new Date()
        });
      if (mintMethod === 1) {
        data = JSON.stringify({
          name,
          description,
          image: url,
          time: dayTo,
          createTime: new Date()
        })
      }
      const added1 = await client.add(data);
      const url1 = `https://ipfs.infura.io/ipfs/${added1.path}`;
      notify("Metadata is uploaded successfully to IPFS.");
      blockchain.akachiNFT.methods
        .mintNewToken(1, url1, royalty*100)
        .send({ from: blockchain.account })
        .once("error", (err) => {
          console.log(err);
        })
        .then(() => {
          navigate("/mynft");
        });
      console.log(url1);
    } catch (err) {
      console.log("error in uploading file: ", err);
    }
  };
  return (
    <div className="createItemComp-layout">
      <Container>
        <Row>
          <Col lg="4">
            <h2 className="createItemComp-title">Preview item</h2>
            {image !== null && (
              <img
                src={image}
                alt="Preview Image"
                className="createItemComp-image"
              />
            )}
          </Col>
          <Col lg="8">
            {mintMethod === 0 && (
              <Row>
                <Col lg="6">
                  <button className="createAuction-method selected">
                    <img src={TagImg} alt="" className="button-img" />
                    Simple Mint
                  </button>
                </Col>
                <Col lg="6">
                  <button
                    className="createAuction-method"
                    onClick={() => setMintMethod(1)}
                  >
                    <img src={ClockImg} alt="" className="button-img" />
                    Hidden Mint
                  </button>
                </Col>
              </Row>
            )}
            {mintMethod === 1 && (
              <Row>
                <Col lg="6">
                  <button
                    className="createAuction-method"
                    onClick={() => setMintMethod(0)}
                  >
                    <img src={TagImg} alt="" className="button-img" />
                    Simple Mint
                  </button>
                </Col>
                <Col lg="6">
                  <button className="createAuction-method selected">
                    <img src={ClockImg} alt="" className="button-img" />
                    Hidden Mint
                  </button>
                </Col>
              </Row>
            )}
            <h2 className="createItemComp-title">Upload file</h2>
            <div className="createItemComp-file-layout">
              <input
                className="createItemComp-file-input"
                type="file"
                onChange={(e) => handleFile(e)}
              />
              <div className="createItemComp-file-div">
                <button className="createItemComp-file-btn" type="button">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.5 1.1l3.4 3.5.1.4v2h-1V6H8V2H3v11h4v1H2.5l-.5-.5v-12l.5-.5h6.7l.3.1zM9 2v3h2.9L9 2zm4 14h-1v-3H9v-1h3V9h1v3h3v1h-3v3z"
                    ></path>
                  </svg>
                  <div style={{ marginLeft: "1rem" }}>Add Files</div>
                </button>
              </div>
            </div>
            <h2 className="createItemComp-title">Name</h2>
            <Input1
              margin="1em"
              text="Item Name"
              onChange={(e) => handleChangeName(e)}
            />
            {mintMethod === 1 && (
              <div>
                <h2 className="createItemComp-title">Day to reveal</h2>
                <Input1
                  margin="1em"
                  text="Day To Reveal"
                  onChange={(e) => setDayTo(e.target.value)}
                />
              </div>
            )}
            <h2 className="createItemComp-title">Description</h2>
            <textarea
              className="blogDetails-input1"
              type="text"
              placeholder='e.g "This is very limited item"'
              onChange={(e) => setDescription(e.target.value)}
            />
            <h2 className="createItemComp-title">Royalty</h2>
            <Input1
              margin="1em"
              text="Royalty: default 0%"
              // placeholder='e.g "This is very limited item"'
              onChange={(e) => setRoyalty(e.target.value)}
            />
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <button
                className="createItemComp-create-btn"
                onClick={() => onCreate()}
              >
                Create Item
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}
export default CreateItemComp;
