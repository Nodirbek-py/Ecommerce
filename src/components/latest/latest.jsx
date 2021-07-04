import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import data from "./data.json";
import "./latest.css";

class Latest extends Component {
    state = {
        data: data,
    };
    render() {
        return (
            <div className="container">
                <Slider autoplay={2000}>
                    {this.state.data.map((article, index) => (
                        <div
                            key={index}
                            style={{
                                background: `url("${article.img}")`,
                                backgroundPosition: "center",

                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="slide__text">
                                <h2>{article.title}</h2>
                                <h3>{article.description}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Latest;
