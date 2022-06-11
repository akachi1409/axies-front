import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import CreateAuction from "../../components/auction/createAuction"
import { useParams } from "react-router-dom";
function MyNFTItem () {
    const { contract, id } = useParams();
    return(
        <div>
            <NavbarComp/>
            <Header title="My NFT" text="Home / Profile / MyNFT"/>
            <CreateAuction contract={contract} id={id}/>
            <Footer/>
        </div>
    )
}
export default MyNFTItem;