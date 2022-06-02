import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import Header from "../../components/header/header";
import ActivityComp1 from "../../components/activity/activityComp1/activityComp1"
import Footer from "../../components/footer/footer";

function Acticity1 (){
    return(
        <div>
            <NavbarComp/>
            <Header title= "Acticity 1" text = "Home / Activity / Acticity1"/> 
            <ActivityComp1 />
            <Footer/>
        </div>
    )
}

export default Acticity1;