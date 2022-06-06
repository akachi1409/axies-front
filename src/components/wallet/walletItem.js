import React from "react"

import "./walletItem.css";

import { useDispatch } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
// import { fetchData } from "../../redux/data/dataActions";

function WalletItem(props) {
    const dispatch = useDispatch();
    // const blockchain = useSelector((state) => state.blockchain);
    // const getData = () => {
    //     if (blockchain.account !== "" && blockchain.smartContract !== null) {
    //       dispatch(fetchData(blockchain.account));
    //     }
    //   };

    const connectWallet = () =>{
        dispatch(connect());
        // getData();
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