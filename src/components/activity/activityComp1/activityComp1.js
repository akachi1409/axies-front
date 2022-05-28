import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./activityComp1.css";
import ActivityItem1 from "./activityItem1";

import PlaceholderImg from "../../../assets/activity/placeholder.png";
import PeopleImg from "../../../assets/activity/people.png";
import MessageImg from "../../../assets/activity/message.png";
import CartImg from "../../../assets/activity/cart.png";
import HeartImg from "../../../assets/activity/heart.png";
import BoxImg from "../../../assets/activity/box.png";
import Button2 from "../../../basic/button/button2";

import FilterItem from "./filterItem";
import SortImg from "../../../assets/activity/sort.png";
import Heart1Img from "../../../assets/activity/heart1.png";
import Cart1Img from "../../../assets/activity/cart1.png";
import SaleImg from "../../../assets/activity/sale.png";
import TransferImg from "../../../assets/activity/transfer.png";
import BurnImg from "../../../assets/activity/burn.png";
import BidsImg from "../../../assets/activity/bids.png";
import UsersImg from "../../../assets/activity/users.png";
class ActivityComp1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Monica Lucas",
          author_text: "started following",
          author: " Gayle Hicks",
          date: "At 2:30 PM on 19th June, 2021",
          img: PlaceholderImg,
          img1: PeopleImg,
        },
        {
          title: "Wow! That Brain is Floating",
          author_text: "10 editions listed by",
          author: " Meowbids",
          date: "At 2:30 PM on 19th June, 2021",
          img: PlaceholderImg,
          img1: MessageImg,
        },
        {
          title: "Erotic 35mm and polaroid photography",
          author_text: "started following",
          author: " Gayle Hicks",
          date: "At 2:30 PM on 19th June, 2021",
          img: PlaceholderImg,
          img1: CartImg,
        },
        {
          title: "Our Journey Start",
          author_text: "started following",
          author: " Gayle Hicks",
          date: "At 2:30 PM on 19th June, 2021",
          img: PlaceholderImg,
          img1: HeartImg,
        },
        {
          title: "Skrrt Cobain Official",
          author_text: "started following",
          author: " Gayle Hicks",
          date: "At 2:30 PM on 19th June, 2021",
          img: PlaceholderImg,
          img1: BoxImg,
        },
      ],
      filters: [
        {
          img: SortImg,
          title: "Listings",
        },
        {
          img: Heart1Img,
          title: "Like",
        },
        {
          img: Cart1Img,
          title: "Purchases",
        },
        {
          img: SaleImg,
          title: "Sales",
        },
        {
          img: TransferImg,
          title: "Transfer",
        },
        {
          img: BurnImg,
          title: "Burns",
        },
        {
          img: BidsImg,
          title: "Bids",
        },
        {
          img: UsersImg,
          title: "Followings",
        },
      ],
    };
  }

  render() {
    const { data, filters } = this.state;
    return (
      <div className="activityComp1-layout">
        <Container>
          <Row>
            <Col lg="7">
              {data.map((item, index) => (
                <ActivityItem1
                  key={index}
                  title={item.title}
                  img={item.img}
                  description={item.author_text}
                  author={item.author}
                  date={item.date}
                  img1={item.img1}
                />
              ))}
              <Button2 title="Load More" />
            </Col>
            <Col lg="5">
              <input
                className="activityComp1-search-input"
                placeholder="Enter your word art"
              />
              <h2 className="activityComp1-filter-title">Filter</h2>
              <div className="activityComp1-filter">
                {filters.map((item, index) => (
                  <FilterItem key={index} img={item.img} title={item.title} />
                ))}
              </div>
              <h4 className="activityComp1-filter-clear">Clear All Filters</h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ActivityComp1;
