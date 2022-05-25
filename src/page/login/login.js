import React from "react";


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import LoginComp from "../../components/auth/loginComp/loginComp";
function Login () {
    return(
        <div>
            <Header title="Login" text="Home / Pages / Login"/>
            <LoginComp/>
            <Footer/>
        </div>
    )
}
export default Login;