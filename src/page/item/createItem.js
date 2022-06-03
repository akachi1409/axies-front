import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import Header from "../../components/header/header";
import CreateItemComp from "../../components/item/createItem/createItemComp"
import Footer from "../../components/footer/footer";

function CreateItem(){
    return(
        <div>
            <NavbarComp/>
            <Header title="Create Item" text = "Home / Pages / Create Item"/>
            <CreateItemComp/>
            <Footer/>
        </div>
    )
}

export default CreateItem;