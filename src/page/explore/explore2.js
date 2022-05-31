import React from "react";

import Header from "../../components/header/header";
import Explore2Comp from "../../components/explore/explore2/explore2Comp"
import Footer from "../../components/footer/footer";

function Explore2(){
    return(
        <div>
            <Header title="Explore 2" text = "Home / Explore / Explore 2"/>
            <Explore2Comp />
            <Footer/>
        </div>
    )
}

export default Explore2;