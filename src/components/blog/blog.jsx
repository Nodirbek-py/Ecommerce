import React, { Component } from "react";
import posts from "./posts.json";
import "./blog.css";
class Blog extends Component {
    state = {
        posts: posts,
    };
    render() {
        return (
            <div className="blog container">
                <h1 className="blog__title">Blog</h1>
                <div className="blog__grid">
                    {this.state.posts.map((post, index) => {
                        return (
                            <a key={index} href="/">
                                <div className="blog__card">
                                    <div className="post__row">
                                        <h1 className="post__title">
                                            {post.title}
                                        </h1>
                                        <h1 className="post__date">
                                            {post.date}
                                        </h1>
                                    </div>
                                    <h1 className="post__description">
                                        {post.description}
                                    </h1>
                                </div>
                            </a>
                        );
                    })}
                    <a href="/">
                        <div className="blog__card last">
                            <h1 className="post__title">See all</h1>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Blog;
