import React from 'react';

import "./blogPostItem.css"
function BlogPostItem(props) {
    return(
        <div className="blogPostItem-layout">
            <img className="blogPostItem-img" src={props.img} alt=""/>
            <div className="blogPostItem-mid">
                <h4 className="blogPostItem-title">
                    {props.title}
                </h4>
                <p className="blogPostItem-text">{props.text}
                </p>
            </div>
            <div className="blogPostItem-date-layout">
                <p className="blogPostItem-date">
                    {props.date}
                </p>
            </div>
        </div>
    )
}

export default BlogPostItem;