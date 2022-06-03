import "./createItemComp.css";

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Explore1Item from "../../explore/explore1/explore1Item";

import Input1 from "../../../basic/button/input1";
import ClockImg from "../../../assets/item/clock.png";
import TagImg from "../../../assets/item/tag.png";
import PeopleImg from "../../../assets/item/people.png";
class CreateItemComp extends Component {

  render() {
    return (
      <div className="createItemComp-layout">
        <Container>
          <Row>
            <Col lg="4">
              <h2 className="createItemComp-title">Preview item</h2>
              <Explore1Item
                title='"Cyber Doberman #766"'
                net="BSC"
                owner="Freddie Carpenter"
                price="Current Bid"
                priceItem="4.89ETH"
                bidding={true}
              />
            </Col>
            <Col lg="8">
              <h2 className="createItemComp-title">Upload file</h2>
              <div className="createItemComp-file-layout">
                <input className="createItemComp-file-input" type="file" />
                <div className="createItemComp-file-div">
                  <button className="createItemComp-file-btn" type="button">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="22"
                      width="22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.5 1.1l3.4 3.5.1.4v2h-1V6H8V2H3v11h4v1H2.5l-.5-.5v-12l.5-.5h6.7l.3.1zM9 2v3h2.9L9 2zm4 14h-1v-3H9v-1h3V9h1v3h3v1h-3v3z"
                      ></path>
                    </svg>
                    <div style={{ marginLeft: "1rem" }}>Add Files</div>
                  </button>
                </div>
              </div>
              <h2 className="createItemComp-title">Select method</h2>
              <Row>
                <Col lg="4">
                  <button className="createItemComp-method selected">
                    <img src={TagImg} alt="" className="button-img" />
                    Fixed Price
                  </button>
                </Col>
                <Col lg="4">
                  <button className="createItemComp-method">
                    <img src={ClockImg} alt="" className="button-img" />
                    Fixed Price
                  </button>
                </Col>
                <Col lg="4">
                  <button className="createItemComp-method">
                    <img src={PeopleImg} alt="" className="button-img" />
                    Fixed Price
                  </button>
                </Col>
              </Row>
              <h2 className="createItemComp-title">Price</h2>
              <Input1 margin="1em" text="Enter price for one item (ETH)" />
              <h2 className="createItemComp-title">Title</h2>
              <Input1 margin="1em" text="Item Name" />
              <h2 className="createItemComp-title">Description</h2>
              <textarea
                className="blogDetails-input1"
                type="text"
                placeholder='e.g "This is very limited item"'
              />
              <Row>
                <Col lg="4">
                  <h2 className="createItemComp-title">Royalties</h2>
                  <input placeholder="5%" className="createItemComp-input"/>
                </Col>
                <Col lg="4">
                  <h2 className="createItemComp-title">Size</h2>
                  <input placeholder="e.g 'size'" className="createItemComp-input"/>
                </Col>
                <Col lg="4">
                  <h2 className="createItemComp-title">Collection</h2>
                  <select className="explore1Comp-select">
                    <option>All Artworks</option>
                    <option>Music</option>
                    <option>Domain Names</option>
                    <option>Virtual World</option>
                    <option>Trading Cards</option>
                    <option>Sports</option>
                    <option>Utility</option>
                  </select>
                </Col>
              </Row>
              <div style={{display:"flex", flexDirection:"row-reverse"}}>
                <button className="createItemComp-create-btn">Create Item</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default CreateItemComp;
