import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import LiveAuction from "../../components/home/liveAuction"
import Footer from "../../components/footer/footer";

function Home() {
    return (
        <div>
            <NavbarComp/>
            <LiveAuction/>
            <Footer/>
        </div>
    )
}

export default Home