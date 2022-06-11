import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import Header from "../../components/header/header";
import CreateAuction from "../../components/auction/createAuction"
import Footer from "../../components/footer/footer";

function CreateAuctionPage(){
    return(
        <div>
            <NavbarComp/>
            <Header title="Auctions" text = "Home / Explore / "/>
            <CreateAuction/>
            <Footer/>
        </div>
    )
}

export default CreateAuctionPage;