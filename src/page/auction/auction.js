import React from "react";

import Header from "../../components/header/header";
import AuctionComp from "../../components/auction/auctionComp"
import Footer from "../../components/footer/footer";

function Auction(){
    return(
        <div>
            <Header title="Auctions" text = "Home / Explore / Auctions"/>
            <AuctionComp/>
            <Footer/>
        </div>
    )
}

export default Auction;