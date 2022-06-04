import React from "react"

import "./walletItem.css";
function WalletItem(props) {
    return(
        <div className="walletItem-layout">
            <img alt="" src = {props.img}/>
            <h2 className= "walletItem-title">{props.wallet}</h2>
            <p className= "walletItem-text">{props.text} </p>
        </div>
    )
}

export default WalletItem