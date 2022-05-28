import React from "react";

import Header from "../../components/header/header";
import ActivityComp2 from "../../components/activity/activityComp2/activityComp2"
import Footer from "../../components/footer/footer";

function Activity2 (){
    return(
        <div>
            <Header title= "Acticity 2" text = "Home / Activity / Acticity2"/> 
            <ActivityComp2/>
            <Footer/>
        </div>
    )
}

export default Activity2;