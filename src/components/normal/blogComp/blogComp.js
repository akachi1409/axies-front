import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";

import BlogItem from "./blogItem"
import "./blogComp.css";
import placeholderImg from "../../../assets/blog/placeholder.png"
import itemImg from "../../../assets/blog/itemholder.png";

class BlogComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    img: placeholderImg,
                    title: "The Next Big Trend In Crypto",
                    text: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
                    item: itemImg,
                    date: "Feb 19, 2021",
                    text1: "Post Owner",
                    text2: "SalvadorDali"
                },
                {
                    img: placeholderImg,
                    title: "The Next Big Trend In Crypto",
                    text: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
                    item: itemImg,
                    date: "Feb 19, 2021",
                    text1: "Post Owner",
                    text2: "SalvadorDali"
                },
                {
                    img: placeholderImg,
                    title: "The Next Big Trend In Crypto",
                    text: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
                    item: itemImg,
                    date: "Feb 19, 2021",
                    text1: "Post Owner",
                    text2: "SalvadorDali"
                },
                {
                    img: placeholderImg,
                    title: "The Next Big Trend In Crypto",
                    text: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
                    item: itemImg,
                    date: "Feb 19, 2021",
                    text1: "Post Owner",
                    text2: "SalvadorDali"
                },
                {
                    img: placeholderImg,
                    title: "The Next Big Trend In Crypto",
                    text: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
                    item: itemImg,
                    date: "Feb 19, 2021",
                    text1: "Post Owner",
                    text2: "SalvadorDali"
                },
                {
                    img: placeholderImg,
                    title: "The Next Big Trend In Crypto",
                    text: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
                    item: itemImg,
                    date: "Feb 19, 2021",
                    text1: "Post Owner",
                    text2: "SalvadorDali"
                },
            ]
        }
    }
    render() {
        return(
            <div className="blogComp-layout">
                <Container>
                    <Row style={{justifyContent:"center"}}>
                        {
                            this.state.data.map((item, index)=>(
                                <Col lg="4" key={index}>
                                    <BlogItem
                                        title={item.title}
                                        text={item.text}
                                        img = {item.img}
                                        date = {item.date}
                                        item = {item.item}
                                        text1 = {item.text1}
                                        text2 = {item.text2}
                                        />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        )
    }
    
}

export default BlogComp;