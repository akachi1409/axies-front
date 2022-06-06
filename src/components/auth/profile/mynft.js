import React, { useState, useEffect } from "react";
import "./mynft.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Mynft () {
    const [firstLoad, setFirstLoad] = useState(true)
    const blockchain = useSelector((state) => state.blockchain);
    let navigate = useNavigate();
    useEffect(()=>{
        if (firstLoad) {
            console.log(blockchain)
            if (blockchain.account === null){
               navigate("/")
            }
            setFirstLoad(false);
        }
    })
    return (
        <div className= "mynft-layout">

        </div>
    )
}
export default Mynft;