import "./explore1Comp.css"

import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap";
import Explore1Item from "./explore1Item"
import axios from "axios";

import Button2 from "../../../basic/button/button2";

// Explore the certain item
class Explore1Comp extends Component {
    constructor(props) {
        super(props)
        this.state ={
            data: [],
            images:[]
        }
        // console.log(props.id);
    }
    componentDidMount() {
        const url = "https://api.reservoir.tools/tokens/v4?contract=" + this.props.contract+ "&sortBy=floorAskPrice&limit=20"
        axios.get(url).then((res) =>{
            // console.log(res);
            this.setState({data: res.data.tokens})
        })
        const imageURL = "https://api.reservoir.tools/tokens/details/v4?contract="+ this.props.contract+ "&sortBy=floorAskPrice&limit=20"
        axios.get(imageURL).then((res)=>{
            var temp = []
            res.data.tokens.map((token, index) =>{
                // console.log(token)
                temp.push(token.token.image)
                return(<></>)
            })
            this.setState({images:temp})
        })
    }
    render(){
        return(
            <div className="explore1Comp-layout">
                <Container>
                    <Row>
                        <Col lg="6">
                            <select className="explore1Comp-select">
                                <option>Art</option>
                                <option>Music</option>
                                <option>Domain Names</option>
                                <option>Virtual World</option>
                                <option>Trading Cards</option>
                                <option>Sports</option>
                                <option>Utility</option>
                            </select>
                            <select className="explore1Comp-select">
                                <option>Buy Now</option>
                                <option>Music</option>
                                <option>Domain Names</option>
                                <option>Virtual World</option>
                                <option>Trading Cards</option>
                                <option>Sports</option>
                                <option>Utility</option>
                            </select>
                            <select className="explore1Comp-select">
                                <option>All Items</option>
                                <option>Music</option>
                                <option>Domain Names</option>
                                <option>Virtual World</option>
                                <option>Trading Cards</option>
                                <option>Sports</option>
                                <option>Utility</option>
                            </select>
                        </Col>
                        <Col lg="6">
                            <select className="explore1Comp-select">
                                <option>All Artworks</option>
                                <option>Music</option>
                                <option>Domain Names</option>
                                <option>Virtual World</option>
                                <option>Trading Cards</option>
                                <option>Sports</option>
                                <option>Utility</option>
                            </select>
                            <select className="explore1Comp-select">
                                <option>Sort By</option>
                                <option>Music</option>
                                <option>Domain Names</option>
                                <option>Virtual World</option>
                                <option>Trading Cards</option>
                                <option>Sports</option>
                                <option>Utility</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        {
                            this.state.data.map((item, index) => {
                                var price = item.floorAskPrice == null ? 0 : item.floorAskPrice
                                var owner = item.owner.length> 12? item.owner.substring(0,12) + "..." : item.owner 
                                return(
                                <Col lg="3" key={index}>
                                    <Explore1Item 
                                        image = {this.state.images[index]}
                                        title={item.title}
                                        // net={item.net}
                                        owner = {owner}
                                        price = {price}
                                        // priceItem = {item.priceItem}
                                        bidding = {item.bidding}
                                    />
                                </Col>
                            );
                                })
                        }
                    </Row>
                    <Button2 title="Load More" />
                </Container>
            </div>
        )
    }
}
export default Explore1Comp;