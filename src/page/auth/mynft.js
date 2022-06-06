import React from "react";


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import NavbarComp from "../../components/navbar/navbarcomp"
import Mynft from "../../components/auth/profile/mynft"
function MyNFT () {
    return(
        <div>
            <NavbarComp/>
            <Header title="My NFT" text="Home / Profile / MyNFT"/>
            <Mynft/>
            <Footer/>
        </div>
    )
}
export default MyNFT;