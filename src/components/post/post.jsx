import React from "react";
import "./post.css";
const Post = (props) => {
    return (
        <div className="post">
            <a href={"/products/" + props.id}>
                <img src={props.cover} alt="" className="product__cover" />
                <div className="product">
                    <h1 className="product__title">{props.title}</h1>
                    <h2 className="product__category">{props.category}</h2>
                    <h2 className="product__price">{props.price}</h2>
                </div>
            </a>
        </div>
    );
};

export default Post;
