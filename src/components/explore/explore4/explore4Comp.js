import "./explore4Comp.css";

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import axios from "axios";
// import FilterItem2 from "./fliterItem2";

//Explore all the possible collections
import Explore4Item from "./explore4Item";
class Explore4Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const url =
      "https://api-rinkeby.reservoir.tools/collections/v4?sortBy=1DayVolume&includeTopBid=false&limit=15";
    axios.get(url).then((res) => {
      // console.log(res);
      this.setState({ data: res.data.collections });
    });
  }

  render() {
    return (
      <div className="explore4Comp-layout">
        <Container>
          <Row>
            <h2 className="explore4Comp-title">Last 15 collections</h2>
          </Row>
          <Row>
            {this.state.data.map((item, index) => {
              var title = "";
              if (item.name.length > 20) {
                title = item.name.substring(0, 17) + "...";
              }
              var contract = item.tokenSetId.split(":")[1]
              return (
                <Col lg="4" key={index} style={{padding: "1em"}}>
                  <Explore4Item
                    index={index + 1}
                    title={title}
                    price={item.floorAskPrice}
                    img={item.image}
                    supply={item.tokenCount}
                    contract = {contract}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Explore4Comp;
