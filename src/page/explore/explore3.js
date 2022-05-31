import React from "react";

import Header from "../../components/header/header";
import Explore3Comp from "../../components/explore/explore3/explore3Comp"
import Footer from "../../components/footer/footer";

function Explore3(){
    return(
        <div>
            <Header title="Explore 3" text = "Home / Explore / Explore 3"/>
            <Explore3Comp />
            <Footer/>
        </div>
    )
}

export default Explore3;