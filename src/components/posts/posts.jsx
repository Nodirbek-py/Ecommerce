import React, { Component } from "react";
import Post from "../post/post";
import "./posts.css";

const products = require("./posts_data.json");
class Posts extends Component {
    state = {
        products,
    };
    render() {
        return (
            <div className="posts">
                {this.state.products.map((product) => {
                    return (
                        <Post
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            cover={product.cover}
                            price={product.price}
                            category={product.category}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Posts;
