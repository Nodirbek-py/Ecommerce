import React, { Component } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Posts from "../components/posts/posts"
class List extends Component {
    state = {};
    render() {
        return (
            <div className="list container">
                <div className="list__sidebar">
                    <Sidebar />
                </div>
                <div className="list__main">
                    <Posts/>
                </div>
            </div>
        );
    }
}

export default List;
