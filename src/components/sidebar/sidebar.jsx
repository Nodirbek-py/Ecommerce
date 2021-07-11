import React, { Component } from "react";
import "./sidebar.css";
class Sidebar extends Component {
    state = {};
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__category">
                    <div className="category">
                        <h1
                            className="sidebar__title"
                            onClick={(event) => {
                                console.log(event.target.innerHTML);
                            }}
                        >
                            smartphones
                        </h1>
                        <div className="subcategory">
                            <ul>
                                <li
                                    onClick={(event) => {
                                        console.log(event.target.innerHTML);
                                    }}
                                >
                                    casual
                                </li>
                                <li
                                    onClick={(event) => {
                                        console.log(event.target.innerHTML);
                                    }}
                                >
                                    gaming
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="category">
                        <h1
                            className="sidebar__title"
                            onClick={(event) => {
                                console.log(event.target.innerHTML);
                            }}
                        >
                            tablets
                        </h1>
                        <div className="subcategory">
                            <ul>
                                <li
                                    onClick={(event) => {
                                        console.log(event.target.innerHTML);
                                    }}
                                >
                                    small
                                </li>
                                <li
                                    onClick={(event) => {
                                        console.log(event.target.innerHTML);
                                    }}
                                >
                                    big
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="category">
                        <h1
                            className="sidebar__title"
                            onClick={(event) => {
                                console.log(event.target.innerHTML);
                            }}
                        >
                            laptops
                        </h1>
                        <div className="subcategory">
                            <ul>
                                <li
                                    onClick={(event) => {
                                        console.log(event.target.innerHTML);
                                    }}
                                >
                                    12-14 inches
                                </li>
                                <li
                                    onClick={(event) => {
                                        console.log(event.target.innerHTML);
                                    }}
                                >
                                    15-17 inches
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="category">
                        <h1
                            className="sidebar__title"
                            onClick={(event) => {
                                console.log(event.target.innerHTML);
                            }}
                        >
                            accessories
                        </h1>
                        <div className="subcategory">
                            <ul>
                                <li
                                    onClick={(event) => {
                                        console.log(event.target.innerHTML);
                                    }}
                                >
                                    for phone
                                </li>
                                <li
                                    onClick={(event) => {
                                        console.log(event.target.innerHTML);
                                    }}
                                >
                                    for laptop
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
