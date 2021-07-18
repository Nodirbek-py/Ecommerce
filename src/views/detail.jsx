import React, { useEffect, useState } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./main.css";
const products = require("../components/posts/posts_data.json");
class Detail extends React.Component {
    state = {
        data: products[this.props.match.params.id - 1],
    };
    render() {
        return (
            <div className="detail container">
                <div className="detail__top">
                    <div className="detail__imgs">
                        <Slider autoplay={2000}>
                            <div
                                style={{
                                    background: `url(${this.state.data.img1})`,
                                    backgroundPosition: "center",

                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                            <div
                                style={{
                                    background: `url(${this.state.data.img2})`,
                                    backgroundPosition: "center",

                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                            <div
                                style={{
                                    background: `url(${this.state.data.img3})`,
                                    backgroundPosition: "center",

                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                        </Slider>
                    </div>
                    <div className="detail__info">
                        <h1 className="detail__title">
                            {this.state.data.title}
                        </h1>
                        <h2 className="detail__description">
                            {this.state.data.description}
                        </h2>
                        <h2 className="detail__price">
                            {" "}
                            {this.state.data.category} | {this.state.data.price}
                        </h2>
                        <h2 className="detail__color">
                            Color: {this.state.data.color}
                        </h2>
                        <span className="detail__amount">Amount: </span>
                        <input
                            className="detail__input"
                            type="number"
                            name=""
                            id=""
                            min="0"
                            max="100"
                            placeholder="Max 100"
                        />
                        <button className="detail__btn">Buy</button>
                    </div>
                </div>
                <div className="detail__bottom">
                    <h1>
                        Here comes comments, but it will be available in the
                        next release.
                    </h1>
                </div>
            </div>
        );
    }
}

export default Detail;
