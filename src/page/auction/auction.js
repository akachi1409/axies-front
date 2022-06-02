import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import Header from "../../components/header/header";
import AuctionComp from "../../components/auction/auctionComp"
import Footer from "../../components/footer/footer";

function Auction(){
    return(
        <div>
            <NavbarComp/>
            <Header title="Auctions" text = "Home / Explore / Auctions"/>
            <AuctionComp/>
            <Footer/>
        </div>
    )
}

export default Auction;