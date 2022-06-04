import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import Header from "../../components/header/header";
import WalletComp from "../../components/wallet/walletComp";
import Footer from "../../components/footer/footer";

function ConnectWallet(){
    return(
        <div>
            <NavbarComp/>
            <Header title="Connect Wallet" text = "Home / Pages / Connect Wallet" />
            <WalletComp/>
            <Footer/>
        </div>
    )
}

export default ConnectWallet;