import "./previewAuction.css";
import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState} from "react"
// import HeartImg from "../../../assets/explore/heart.png";
import UserImg from "../../assets/explore/user.png";
import BagImg from "../../assets/explore/bag.png";
import ReloadImg from "../../assets/explore/reload.png";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
function PreviewAuction(props) {
  const [firstLoad, setFirstLoad] = useState(true);
  const [image, setImage] = useState(null);
  // let navigate = useNavigate();
  
  

  useEffect(() =>{
    async function getData() {
      console.log("props", props)
      if (props.image === undefined || props.image === null){
        return;
      }
      var temp = await axios.get(props.image);
      setImage(temp.data);
      setFirstLoad(false)
    }
    if (firstLoad)
      getData();
    /* eslint-disable */
  }, [firstLoad])
  return (
    <div className="previewAuction-layout">
      <Row>
        <div className="previewAuction-img-layout">
          
              <img src={image} alt="" className="previewAuction-img"></img>
        </div>
      </Row>

      <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <h1 className="previewAuction-title">{props.title}</h1>
      </Row>

      <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="2">
          <img src={UserImg} alt="" />
        </Col>
        <Col lg="7" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="previewAuction-owner-title">Owned By</h4>
          <p className="previewAuction-owner">{props.owner}</p>
        </Col>
        <Col lg="3" style={{ textAlign: "right" }}>
          <h4 className="previewAuction-owner-title">Floor Price</h4>
          <p className="previewAuction-owner">{props.price}</p>
        </Col>
      </Row>
      {props.bidding && (
        <Row style={{ marginTop: "1em" }}>
          <Col lg="6">
            <div className="previewAuction-bid">
              <img src={BagImg} alt="" />
              &nbsp; Place bid
            </div>
          </Col>
          <Col lg="6">
            <div className="previewAuction-refresh">
              <img src={ReloadImg} alt="" />
              &nbsp; View History
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}
export default PreviewAuction;
