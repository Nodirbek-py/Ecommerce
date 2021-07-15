import React, { Component } from "react";
import "./sidebar.css";
class Sidebar extends Component {
  state = {
    smartphoneHidden: true,
    tabletHidden: true,
    laptopHidden: true,
    accessoryHidden: true
  };

  render(props) {
    return (
      <div className="sidebar">
        <div className="sidebar__category">
          <div className="sidebar__category">
            <h1
              className="sidebar__title"
              onClick={(event) => {
                console.log(event.target.innerHTML);
                this.setState({
                  smartphoneHidden: !this.state.smartphoneHidden,
                });
              }}
            >
              smartphones
            </h1>
            {this.state.smartphoneHidden === false ? (
              <div className="subcategory">
                <ul>
                  <li
                    onClick={(event) => {
                      console.log(event.target.innerHTML);
                      this.props.filterFunc(event.target.innerHTML);
                    }}
                  >
                    casual
                  </li>
                  <li
                    onClick={(event) => {
                      console.log(event.target.innerHTML);
                      this.props.filterFunc(event.target.innerHTML);
                    }}
                  >
                    gaming
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className="sidebar__category">
            <h1
              className="sidebar__title"
              onClick={(event) => {
                console.log(event.target.innerHTML);

                this.setState({
                  tabletHidden: !this.state.tabletHidden,
                });
              }}
            >
              tablets
            </h1>
            {this.state.tabletHidden === false ? (
              <div className="subcategory">
                <ul>
                  <li
                    onClick={(event) => {
                      console.log(event.target.innerHTML);
                      this.props.filterFunc(event.target.innerHTML);
                    }}
                  >
                    small
                  </li>
                  <li
                    onClick={(event) => {
                      console.log(event.target.innerHTML);
                      this.props.filterFunc(event.target.innerHTML);
                    }}
                  >
                    big
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className="sidebar__category">
            <h1
              className="sidebar__title"
              onClick={(event) => {
                console.log(event.target.innerHTML);
                this.setState({
                  laptopHidden: !this.state.laptopHidden,
                });
              }}
            >
              laptops
            </h1>
            {this.state.laptopHidden === false ? (
              <div className="subcategory">
                <ul>
                  <li
                    onClick={(event) => {
                      console.log(event.target.innerHTML);
                      this.props.filterFunc(event.target.innerHTML);
                    }}
                  >
                    12-14 inches
                  </li>
                  <li
                    onClick={(event) => {
                      console.log(event.target.innerHTML);
                      this.props.filterFunc(event.target.innerHTML);
                    }}
                  >
                    15-17 inches
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className="sidebar__category">
            <h1
              className="sidebar__title"
              onClick={(event) => {
                console.log(event.target.innerHTML);
                this.setState({
                  accessoryHidden: !this.state.accessoryHidden,
                });
              }}
            >
              accessories
            </h1>
            {this.state.accessoryHidden === false ? (
              <div className="subcategory">
                <ul>
                  <li
                    onClick={(event) => {
                      console.log(event.target.innerHTML);
                      this.props.filterFunc(event.target.innerHTML);
                    }}
                  >
                    for phone
                  </li>
                  <li
                    onClick={(event) => {
                      console.log(event.target.innerHTML);
                      this.props.filterFunc(event.target.innerHTML);
                    }}
                  >
                    for laptop
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
