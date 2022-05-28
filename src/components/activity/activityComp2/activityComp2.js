import "./activityComp2.css";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Button2 from "../../../basic/button/button2";
import ActivityItem2 from "./activityItem2";
import FilterItem2 from "./fliterItem2";
import PlaceholderImg from "../../../assets/activity2/placeholder.png";
class ActivityComp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          img: PlaceholderImg,
          title: "Pinky Ocean",
          authorText: "follwoing",
          author: "Gayle Hicks",
          date: "19th June, 2021",
        },
        {
          img: PlaceholderImg,
          title: "Deep Sea Plan",
          authorText: "listed by",
          author: "Trista Francis",
          date: "10 minutes ago",
        },
        {
          img: PlaceholderImg,
          title: "Rainbow Style",
          authorText: "follwoing",
          author: "Gayle Hicks",
          date: "19th June, 2021",
        },
        {
          img: PlaceholderImg,
          title: "This is Our Story",
          authorText: "listed by",
          author: "Trista Francis",
          date: "10 minutes ago",
        },
        {
          img: PlaceholderImg,
          title: "I Believe I Can Fly",
          authorText: "follwoing",
          author: "Gayle Hicks",
          date: "19th June, 2021",
        },
        {
          img: PlaceholderImg,
          title: "Cute Astronout",
          authorText: "listed by",
          author: "Trista Francis",
          date: "10 minutes ago",
        },
        {
          img: PlaceholderImg,
          title: "USA Wordmation",
          authorText: "follwoing",
          author: "Gayle Hicks",
          date: "19th June, 2021",
        },
        {
          img: PlaceholderImg,
          title: "Running Puppets",
          authorText: "listed by",
          author: "Trista Francis",
          date: "19th June, 2021",
        },
      ],
      filters: [
        {
          title: "Listings",
        },
        {
          title: "Purchases",
        },
        {
          title: "Sales",
        },
        {
          title: "Transfers",
        },
        {
          title: "Bids",
        },
        {
          title: "Likes",
        },
        {
          title: "Followings",
        },
      ],
    };
  }

  render() {
    const { data, filters } = this.state;
    return (
      <div className="activityComp2-layout">
        <Container>
          <Row>
            <Col lg="8">
              <Row>
                {data.map((item, index) => (
                  <Col lg="6" key={index}>
                    <ActivityItem2
                      img={item.img}
                      title={item.title}
                      author={item.author}
                      authorText={item.authorText}
                      date={item.date}
                    />
                  </Col>
                ))}
              </Row>
              <Button2 title="Load More" />
            </Col>
            <Col lg="4">
              <input
                className="activityComp2-search-input"
                placeholder="Enter your word art"
              />
              <h2 className="activityComp2-filter-title">Filter</h2>
              {
                  filters.map((item, index) => (
                    <FilterItem2 title={item.title} key={index} />
                  ))
              }
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ActivityComp2;
