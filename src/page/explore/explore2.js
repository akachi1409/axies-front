import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import Header from "../../components/header/header";
import Explore2Comp from "../../components/explore/explore2/explore2Comp"
import Footer from "../../components/footer/footer";

function Explore2(){
    return(
        <div>
            <NavbarComp/>
            <Header title="My Profile" text = "Home / User / My Profile"/>
            <Explore2Comp />
            <Footer/>
        </div>
    )
}

export default Explore2;