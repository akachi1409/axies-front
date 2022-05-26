import React from "react";

import Header from "../../components/header/header";
import HelpComp from "../../components/normal/helpComp/helpComp";
import Footer from "../../components/footer/footer";
function Help(){
    return(
        <div>
            <Header title="Help Center" text = "Home / Community / Help Center" />
            <HelpComp/>
            <Footer/>
        </div>
    )
}
export default Help;