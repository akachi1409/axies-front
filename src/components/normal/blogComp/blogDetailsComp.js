import "./blogDetailsComp.css";

import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import Img1 from "../../../assets/blog/1.png";
import Img2 from "../../../assets/blog/2.png";
import Img4 from "../../../assets/blog/4.png";
import PostImg from "../../../assets/blog/post.png";

import BlogPostItem from "./blogPostItem";
import FilterItem from "./filterItem.js";
class BlogDetailsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [
        {
          img: PostImg,
          title: "6 Make Mobile Website Faster",
          text: "Lorem ipsum dolor sit amer....",
          date: "August 10, 2021",
        },
        {
          img: PostImg,
          title: "Experts Web Design Tips",
          text: "Lorem ipsum dolor sit amer....",
          date: "August 22, 2021",
        },
        {
          img: PostImg,
          title: "Importance Of Web Design",
          text: "Lorem ipsum dolor sit amer....",
          date: "August 20, 2021",
        },
        {
          img: PostImg,
          title: "Avoid These Erros In UI Design",
          text: "Lorem ipsum dolor sit amer....",
          date: "August 12, 2021",
        },
      ],
      filter: [
        {
          text: "Bitcoin",
        },
        {
          text: "NFT",
        },
        {
          text: "Bids",
        },
        {
          text: "Digital",
        },
        {
          text: "Arts",
        },
        {
          text: "Marketplace",
        },
        {
          text: "Token",
        },
        {
          text: "Wallet",
        },
        {
          text: "Crypto",
        },
      ],
    };
  }

  render() {
    return (
      <div className="blogDetails-layout">
        <Container>
          <Row>
            <Col lg="8">
              <h2 className="blogDetails-title">
                I Believe everyone can be a designer as long they love to create
                design
              </h2>
              <hr />
              <Row>
                <Col lg="6">
                  <h5 className="blogDetails-interview">DESIGNER INTERVIEW</h5>
                  <p className="blogDetails-chapter">AUGUST CHAPTER</p>
                </Col>
                <Col
                  lg="6"
                  style={{ display: "flex", flexDirection: "row-reverse" }}
                >
                  <Row>
                    <Col lg="6" className="blogDetails-writing">
                      <h5 className="blogDetails-interview">WRITER</h5>
                      <p className="blogDetails-chapter">DWINAWAN</p>
                    </Col>
                    <Col lg="6" className="blogDetails-date">
                      <h5 className="blogDetails-interview">DATE</h5>
                      <p className="blogDetails-chapter">AUGUST 11, 2021</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <textarea className="blogDetails-interview-box" />
              </Row>
              <h3 className="blogDetails-title1">
                What is the most fun thing to become a designer?
              </h3>
              <p className="blogDetails-blog">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Cupidatat non Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <Row>
                <Col lg="6">
                  <textarea className="blogDetails-interview-box1-1" />
                </Col>
                <Col lg="6">
                  <textarea className="blogDetails-interview-box1-2" />
                </Col>
              </Row>
              <h3 className="blogDetails-title1">How is your daily routine?</h3>
              <p className="blogDetails-blog">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Cupidatat non Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <Row>
                <textarea className="blogDetails-interview-box2" />
              </Row>
              <h3 className="blogDetails-title1">Middle Post Heading</h3>
              <p className="blogDetails-blog">
                Middle Post Heading Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <Row>
                <Col lg="6" style={{ display: "flex" }}>
                  <h3 className="blogDetails-tag">Tags:</h3>
                  <p className="blogDetails-tag-item">Bitcoin, </p>
                  <p className="blogDetails-tag-item">Token, </p>
                  <p className="blogDetails-tag-item">Wallet</p>
                </Col>
                <Col
                  lg="6"
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                  }}
                >
                  <img src={Img4} alt="" className="blogDetails-share-img" />
                  <img src={Img2} alt="" className="blogDetails-share-img" />
                  <img src={Img1} alt="" className="blogDetails-share-img" />
                  <h3 className="blogDetails-tag">Share:</h3>
                </Col>
              </Row>
              <hr />
              <h2 className="blogDetails-title">Leave a comment</h2>
              <Row>
                <Col lg="6" style={{ display: "flex", flexDirection: "row" }}>
                  <input
                    className="blogDetails-input"
                    type="text"
                    placeholder="Name"
                  />
                </Col>
                <Col
                  lg="6"
                  style={{ display: "flex", flexDirection: "row-reverse" }}
                >
                  <input
                    className="blogDetails-input"
                    type="text"
                    placeholder="Email*"
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: "1em" }}>
                <textarea
                  className="blogDetails-input1"
                  type="text"
                  placeholder="Message"
                />
              </Row>
              <Row style={{ display: "flex" }}>
                <button className="blogDetails-comment">Send Comment</button>
              </Row>
            </Col>
            <Col lg="4" style={{ paddingLeft: "50px" }}>
              <h2 className="blogDetails-title2">Recent Post</h2>
              {this.state.post.map((item, index) => (
                <Row key={index}>
                  <BlogPostItem
                    img={item.img}
                    title={item.title}
                    text={item.text}
                    date={item.date}
                  />
                </Row>
              ))}
              <h2 className="blogDetails-title2">Popular Tag</h2>
              <div style={{display: 'flex', flexWrap:'wrap'}}>
                {this.state.filter.map((item, index) => (
                  <FilterItem title={item.text} key={index}/>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default BlogDetailsComp;
