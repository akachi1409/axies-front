import React from "react";

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import SignupComp from "../../components/auth/signupComp/signupComp"

function Signup(){
    return (
        <div>
            <Header title="Signup" text="Home / Pages / Signup"/>
            <SignupComp/>
            <Footer/>
        </div>
    )
}

export default Signup;