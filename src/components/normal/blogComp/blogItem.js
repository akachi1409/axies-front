import "./blogItem.css"

function BlogItem(props){
    return(
        <div className="blogItem-layout">
            <img className="blogItem-img" src={props.img} alt = ""/>
            <div className="blogItem-des">
                <div className="blogItem-des-left">
                    <img src={props.item} alt = ""/>
                    <div className="blogItem-des-div">
                        <h6 className="blogItem-des-text-1">{props.text1}</h6>
                        <h3 className="blogItem-des-text-2">{props.text2}</h3>
                    </div>
                </div>
                <div className="blogItem-des-right">
                    <h3 className="blogItem-des-date">{props.date}</h3>
                </div>
            </div>
            <h3 className="blogItem-title">{props.title}</h3>
            <p className="blogItem-text">{props.text}</p>
            <button className="blogItem-readmore">Read More</button>
        </div>
    )
}
export default BlogItem;