import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import Header from "../../components/header/header";
import BidItem from "../../components/auction/bidItem"
import Footer from "../../components/footer/footer";
import { useParams } from "react-router-dom";

function BidPage(){
    const { contract, id } = useParams();
    return(
        <div>
            <NavbarComp/>
            <Header title="Bid" text = "Home / Auction / Bid"/>
            <BidItem contract={contract} id={id}/>
            <Footer/>
        </div>
    )
}

export default BidPage;