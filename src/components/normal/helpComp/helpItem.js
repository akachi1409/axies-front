import "./helpItem.css";

function HelpItem(props){
    return(
        <div className="helpItem-layout">
            <img style={{marginTop:"1em"}} src={props.Img}/>
            <h3 className="helpItem-title">{props.title}</h3>
            <p className="helpItem-text">{props.text}</p>
        </div>
    )
}
export default HelpItem;