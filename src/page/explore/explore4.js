import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import Header from "../../components/header/header";
import Explore4Comp from "../../components/explore/explore4/explore4Comp"
import Footer from "../../components/footer/footer";

function Explore4(){
    return(
        <div>
            <NavbarComp/>
            <Header title="Explore Collections" text = "Home / Explore / Explore Collections"/>
            <Explore4Comp />
            <Footer/>
        </div>
    )
}

export default Explore4;