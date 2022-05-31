import React from "react";

import Header from "../../components/header/header";
import Explore1Comp from "../../components/explore/explore1/explore1Comp"
import Footer from "../../components/footer/footer";

function Explore1(){
    return(
        <div>
            <Header title="Explore 1" text = "Home / Explore / Explore 1"/>
            <Explore1Comp />
            <Footer/>
        </div>
    )
}

export default Explore1;