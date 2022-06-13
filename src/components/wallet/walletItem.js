import React from "react"

import "./walletItem.css";

import { useDispatch } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";

function WalletItem(props) {
    const dispatch = useDispatch();

    const connectWallet = () =>{
        dispatch(connect());
    }
    
    return(
        <div className="walletItem-layout" onClick = {() =>connectWallet()}>
            <img alt="" src = {props.img}/>
            <h2 className= "walletItem-title">{props.wallet}</h2>
            <p className= "walletItem-text">{props.text} </p>
        </div>
    )
}

export default WalletItem