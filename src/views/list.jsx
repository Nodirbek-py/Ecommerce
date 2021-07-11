import React, { Component } from "react";
import Sidebar from "../components/sidebar/sidebar";
class List extends Component {
    state = {};
    render() {
        return (
            <div className="list container">
                <div className="list__sidebar">
                    <Sidebar />
                </div>
                <div className="list__main"></div>
            </div>
        );
    }
}

export default List;
