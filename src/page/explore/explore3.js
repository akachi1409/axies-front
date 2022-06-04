import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import Header from "../../components/header/header";
import Explore3Comp from "../../components/explore/explore3/explore3Comp"
import Footer from "../../components/footer/footer";

function Explore3(){
    return(
        <div>
            <NavbarComp/>
            <Header title="Explore 2" text = "Home / Explore / Explore 2"/>
            <Explore3Comp />
            <Footer/>
        </div>
    )
}

export default Explore3;