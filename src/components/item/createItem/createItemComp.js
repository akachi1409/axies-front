import "./createItemComp.css";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import delay from "delay";
// import TagImg from "../../../assets/item/tag.png";
// import ClockImg from "../../../assets/item/clock.png";
import { createItem, createItemS, createItemF } from "../../../redux/data/dataActions"
import Input1 from "../../../basic/button/input1";
import PreviewImage from "../../../assets/preview.png";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

function CreateItemComp() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [flag, setFlag] = useState(true);
  const [mintMethod, setMintMethod] = useState(0);
  const [dayTo, setDayTo] = useState(0);
  const [royalty, setRoyalty] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  let navigate = useNavigate();
  const data = useSelector((state) => state.data);

  const notify = (msg) => toast(msg);

  useEffect(() => {
    async function checkAccount(){
      if (blockchain.account === null) {
        notify("You should connect wallet to create item!")
        await delay(2000);
        navigate("/");
      }
      setFirstLoad(false);
    } 
    
    checkAccount();
    /* eslint-disable */
  }, [firstLoad])

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
    const royaltyT = parseInt(royalty);
    if (name === "" || description === "") {
      notify("You should input the name and descrition to create new NFT!");
      return;
    }
    if (mintMethod === 1 && dayTo === 0) {
      notify("You should input the days to reveal in Hidden Mint Mode.");
      return;
    }
    if (royaltyT > 100 || royaltyT < 0) {
      notify("Royalty should be between 0 and 100.");
      return;
    }
    if (!Number.isInteger(royaltyT)) {
      notify("Royalty should be integer.");
      return;
    }
    try {
      dispatch(createItem())
      notify("Uploading to IPFS is started");
      const added = await client.add(image, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      /* first, upload to IPFS */
      console.log("image Url", url);
      notify("Image is uploaded successfully to IPFS.");
      var data;
      if (mintMethod === 0)
        data = JSON.stringify({
          name,
          description,
          image: url,
          time: 0,
          createTime: new Date(),
        });
      if (mintMethod === 1) {
        data = JSON.stringify({
          name,
          description,
          image: url,
          time: dayTo,
          createTime: new Date(),
        });
      }
      const added1 = await client.add(data);
      const url1 = `https://ipfs.infura.io/ipfs/${added1.path}`;
      notify("Metadata is uploaded successfully to IPFS.");
      blockchain.akachiNFT.methods
        .mintNewToken(1, url1, royalty * 100)
        .send({ from: blockchain.account })
        .once("error", (err) => {
          console.log(err);
        })
        .then(() => {
          dispatch(createItemS())
          navigate("/mynft");
        });
        
      console.log(url1);
    } catch (err) {
      console.log("error in uploading file: ", err);
      dispatch(createItemF())
    }
  };
  return (
    <div className="createItemComp-layout">
      <Container>
        <Row>
          <div className="createItemComp-title-layout">
            <h2 className="preview-title">Preview NFT</h2>
            <div className="bottomBar"></div>
            {image == null && (
              <div className="preview-image-box">
                <img
                  src={PreviewImage}
                  alt="Preview Image"
                  className="preview-image1"
                />  
              </div>
              
            )}
            {image !== null && (
              <img
                src={image}
                alt="Preview Image"
                className="createItemComp-image"
              />
            )}
          </div>
          <Col lg="8">
            {mintMethod === 0 && (
              <Row className="createItemComp-border-layout">
                <Col lg="3">
                  <button className="createAuction-method-selected">
                    Simple Mint
                  </button>
                </Col>
                <Col lg="3">
                  <button
                    className="createAuction-method"
                    onClick={() => setMintMethod(1)}
                  >
                    Hidden Mint
                  </button>
                </Col>
              </Row>
            )}
            {mintMethod === 1 && (
              <Row className="createItemComp-border-layout">
                <Col lg="3">
                  <button
                    className="createAuction-method"
                    onClick={() => setMintMethod(0)}
                  >
                    {/* <img src={TagImg} alt="" className="button-img" /> */}
                    Simple Mint
                  </button>
                </Col>
                <Col lg="3">
                  <button className="createAuction-method-selected">
                    {/* <img src={ClockImg} alt="" className="button-img" /> */}
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
                <div className="createItemComp-svg-div">
                  <svg
                    width="97"
                    height="97"
                    viewBox="0 0 97 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{margin:"auto"}}
                  >
                    <g clipPath="url(#clip0_59_1363)">
                      <path
                        d="M74.8615 37.2817C74.5992 37.2817 74.3366 37.2866 74.0739 37.2958C72.7858 24.3211 61.8082 14.1548 48.5002 14.1548C35.1923 14.1548 24.2143 24.3212 22.9264 37.2959C22.6634 37.2864 22.4007 37.2818 22.1383 37.2818C9.93125 37.2817 0 47.2132 0 59.4202C0 71.6276 9.93125 81.5587 22.1385 81.5587C23.5597 81.5587 24.7115 80.4067 24.7115 78.9857C24.7115 77.5647 23.5596 76.4126 22.1385 76.4126C12.7693 76.4126 5.14623 68.79 5.14623 59.4203C5.14623 50.0507 12.7693 42.4281 22.1385 42.4281C23.0762 42.4281 24.0235 42.5065 24.955 42.6614C25.7071 42.7864 26.4761 42.5714 27.0543 42.0743C27.6323 41.5773 27.9604 40.8493 27.9498 40.0868L27.9484 39.9939C27.9476 39.9476 27.9466 39.9013 27.9466 39.8547C27.9466 28.5216 37.1668 19.301 48.5005 19.301C59.8339 19.301 69.0542 28.5216 69.0542 39.8547C69.0542 39.8985 69.0534 39.942 69.0527 39.9855L69.0513 40.0925C69.0421 40.854 69.3712 41.5804 69.9494 42.076C70.5277 42.5715 71.2948 42.786 72.0471 42.6607C72.9755 42.5062 73.9224 42.4276 74.8618 42.4276C84.2315 42.4276 91.8541 50.0503 91.8541 59.4199C91.8541 68.7894 84.2315 76.4121 74.8618 76.4121C73.4409 76.4121 72.2888 77.5643 72.2888 78.9852C72.2888 80.4064 73.4409 81.5582 74.8618 81.5582C87.0692 81.5582 97.0003 71.6271 97.0003 59.4197C97 47.2132 87.0689 37.2817 74.8615 37.2817Z"
                        fill="#3E5B51"
                      />
                      <path
                        d="M36.2126 38.9409C36.2126 32.8405 41.1755 27.8775 47.276 27.8775C48.6973 27.8775 49.8491 26.7256 49.8491 25.3045C49.8491 23.8836 48.6971 22.7314 47.276 22.7314C38.3379 22.7314 31.0664 30.003 31.0664 38.9411C31.0664 40.3623 32.2184 41.5141 33.6394 41.5141C35.0605 41.5141 36.2126 40.3621 36.2126 38.9409Z"
                        fill="#3E5B51"
                      />
                      <path
                        d="M70.6161 67.6182L50.0209 52.5279C49.1156 51.8644 47.8845 51.8644 46.9793 52.5279L26.29 67.6871C25.3923 68.3447 25.0188 69.5051 25.3651 70.5627C25.7113 71.6205 26.6979 72.3358 27.8109 72.3358H35.2542V80.2726C35.2542 81.6938 36.4063 82.8456 37.8273 82.8456H59.173C60.5942 82.8456 61.746 81.6936 61.746 80.2726V72.3358H69.1898C69.1911 72.3358 69.1927 72.3358 69.1941 72.3358C70.615 72.3358 71.7671 71.1839 71.7671 69.7628C71.7668 68.8675 71.3099 68.0789 70.6161 67.6182ZM59.1728 67.1896C57.7519 67.1896 56.5998 68.3417 56.5998 69.7626V77.6994H40.4001V69.7626C40.4001 68.3417 39.2482 67.1896 37.8271 67.1896H35.676L48.5003 57.7934L61.3244 67.1896H59.1728Z"
                        fill="#3E5B51"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_59_1363">
                        <rect width="97" height="97" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h4 className="createItemComp-svg-title">Drag&Drop file you want to upload</h4>
                  <h5 className="createItemComp-svg-text">Click on the button or Drag&Drop files here</h5>
                </div>

                <button className="createItemComp-file-btn" type="button">
                  <div>Browse Files</div>
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
                Create NFT
              </button>
            </div>
          </Col>
        </Row>
        <Modal show={data.creating} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>Wait a min, please!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            We are creating NFT.
          </Modal.Body>
        </Modal>
      </Container>
      <ToastContainer />
    </div>
  );
}
export default CreateItemComp;
