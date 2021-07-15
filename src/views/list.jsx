import React, { Component } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Posts from "../components/posts/posts";
class List extends Component {
  state = {
    filters: [],
  };
  addFilterHandler = (filter) => {
    if (this.state.filters.includes(filter)) {
      const filters = this.state.filters;
      filters.splice(filters.indexOf(filter), 1);
      this.setState({ filters: [...filters] });
    } else {
      this.setState({ filters: [...this.state.filters, filter] });
    }
  };
  
  render() {
    return (
      <div className="list container">
        <div className="list__sidebar">
          <Sidebar filterFunc={this.addFilterHandler} />
        </div>
        <div className="list__main">
          <Posts filters={this.state.filters} />
        </div>
      </div>
    );
  }
}

export default List;
