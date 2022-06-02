import "./auctionComp.css"

import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap";

import Button2 from "../../basic/button/button2";
import AuctionItem from "./auctionItem"
class AuctionComp extends Component {
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
                },
                {
                    like: 100,
                    soon: false,
                    title: '"Crypto Egg Stamp #5”',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                },
                {
                    like: 100,
                    soon: false,
                    title: '"Travel Monkey Club #45”',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                },
                {
                    like: 100,
                    soon: false,
                    title: '"Sir. Lion Swag #371”',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                },
                {
                    like: 100,
                    soon: false,
                    title: '"Cyber Doberman #766”',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                },
                {
                    like: 100,
                    soon: false,
                    title: '"Living Vase 01 by Lanz...',
                    net: "BSC",
                    owner:"SalvadorDali",
                    priceItem: "Price",
                    price: "4.89ETH",
                },
            ]
        }
    }
    render() {
        return(
            <div className="auctionComp-layout">
                <Container>
                    <h2 className="auctionComp-title">Live Auctions</h2>
                    <Row>
                        {
                            this.state.data.map((item, index) => (
                                <Col lg="3" key={index}>
                                    <AuctionItem 
                                        title={item.title}
                                        net={item.net}
                                        owner = {item.owner}
                                        price = {item.price}
                                        priceItem = {item.priceItem}
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

export default AuctionComp;