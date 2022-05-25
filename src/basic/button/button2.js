import "./button2.css"

function Button2(props) {
    return(
        <button className="button2-layout">
            <span className="button2-title">{props.title}</span>
        </button>
    )
}
export default Button2;