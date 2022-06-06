import React from "react";
import { useNavigate } from "react-router-dom";

import "./explore4Item.css"
function Explore4Item(props){
    let navigate = useNavigate();
    const onNavigate = (contract) =>{
        navigate("/explore_item/"+contract)
    }
    return(
        <div className="explore4Item-layout" onClick={() =>onNavigate(props.contract)}>
            <div className="explore4Item-index">
                <span className="explore4Item-span">{props.index}</span>
            </div>
            <div className="explore4Item-img-layout">
                <img alt="" src={props.img}/>
            </div>
            <div className="explore4Item-des-layout">
                <span className="explore4Item-des-title">{props.title}</span>
                <span className="explore4Item-des-text">Supply {props.supply}</span>
            </div>
            <div className="explore4Item-price-layout">
                <div className="explore4Item-price-lay">
                    <span className="explore4Item-price-per">Floor price</span>
                </div>
                <div className="explore4Item-price">{props.price + "eth"}</div>
            </div>
        </div>
    )
}
export default Explore4Item