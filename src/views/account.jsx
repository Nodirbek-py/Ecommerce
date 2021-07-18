import React, { Component } from "react";
import "./main.css";
class Account extends Component {
    state = {
        user: {
            name: "Kimdir",
            surname: "Kimiyev",
            orders: [],
            pic: "https://picsum.photos/64",
            country: "Uzbekistan",
            city: "Andizhan",
            address: "Yangi baynal minal 3, 5",
        },
    };
    render() {
        return (
            <div className="account container">
                <div className="account__col">
                    <div className="account__header">
                        <div className="account__img">
                            <img src={this.state.user.pic} alt="" />
                        </div>
                        <div className="account__name">
                            <h1>
                                {this.state.user.name} {this.state.user.surname}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="account__col">
                    <div className="account__main">
                        <div className="account__country">
                            <h1>Country: {this.state.user.country}</h1>
                            <h1>City: {this.state.user.city}</h1>
                            <h1>Address: {this.state.user.address}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Account;
