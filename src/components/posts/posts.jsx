import React, { Component } from "react";
import Post from "../post/post";
import "./posts.css";

const products = require("./posts_data.json");
class Posts extends Component {
  state = {
    products,
    notFound: false,
  };
  render() {
    return (
      <div className="posts">
        {this.state.products.map((product) => {
          if (this.props.filters.length > 0) {
            if (this.props.filters.includes(product.category)) {
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
            } else {
              this.setState({ notFound: true });
            }
          } else {
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
          }
        })}
        {this.state.notFound ? <h1>No products found</h1> : null}
      </div>
    );
  }
}

export default Posts;
