import "./explore1Comp.css"

import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap";
import Explore1Item from "./explore1Item"

import Button2 from "../../../basic/button/button2";
class Explore1Comp extends Component {
    constructor(props) {
        super(props)
        this.state ={
            data: [
                {
                    like: 100,
                    soon: false,
                    title: '"The RenaiXance Rising...',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                    bidding: true
                },
                {
                    like: 100,
                    soon: false,
                    title: '"Space babe - Night 2/25"',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                },
                {
                    like: 100,
                    soon: false,
                    title: '"CyberPrimal 042 LAN”',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                    bidding: true
                },
                {
                    like: 100,
                    soon: false,
                    title: '"Crypto Egg Stamp #5”',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                    bidding: true
                },
                {
                    like: 100,
                    soon: false,
                    title: '"Travel Monkey Club #45”',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                    bidding: true
                },
                {
                    like: 100,
                    soon: false,
                    title: '"Sir. Lion Swag #371”',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                    bidding: true
                },
                {
                    like: 100,
                    soon: false,
                    title: '"Cyber Doberman #766”',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                    bidding: true
                },
                {
                    like: 100,
                    soon: false,
                    title: '"Living Vase 01 by Lanz...',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                    bidding: true
                },
            ]
        }
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
                            this.state.data.map((item, index) => (
                                <Col lg="3" key={index}>
                                    <Explore1Item 
                                        title={item.title}
                                        net={item.net}
                                        owner = {item.owner}
                                        price = {item.price}
                                        priceItem = {item.priceItem}
                                        bidding = {item.bidding}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                    <Button2 title="Load More" />
                </Container>
            </div>
        )
    }
}
export default Explore1Comp;