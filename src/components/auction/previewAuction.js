import "./previewAuction.css";
import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState} from "react"
import axios from "axios";
function PreviewAuction(props) {
  const [firstLoad, setFirstLoad] = useState(true);
  const [image, setImage] = useState(null);
  useEffect(() =>{
    async function getData() {
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
        <Col lg="12" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="previewAuction-owner-title">Owned By</h4>
          <p className="previewAuction-owner">{props.owner}</p>
        </Col>
      </Row>
    </div>
  );
}
export default PreviewAuction;
