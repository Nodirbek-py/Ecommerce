import React, { Component } from "react";
import loupe from "../../images/loupe.svg";
import cart from "../../images/trolley.svg";
import account from "../../images/user.svg";
import "./navbar.css";
class Navbar extends Component {
    state = {};
    render() {
        return (
            <div className="navbar-background">
                <div className="navbar container">
                    <div className="navbar__left">
                        <h1 className="navbar__brand">
                            <span className="brand__odd">e</span>Shop
                        </h1>
                        <div className="navbar__search">
                            <input
                                className="search__input"
                                type="text"
                                placeholder="Search anything you want"
                            />
                            <span className="search__line"></span>
                            <img className="search__icon" src={loupe} alt="" />
                        </div>
                    </div>
                    <div className="navbar__right">
                        <div className="navbar__language">
                            <h3 className="language__name">Eng</h3>
                        </div>
                        <div className="navbar__cart">
                            <a href="/cart">
                                <img src={cart} alt="" />
                            </a>
                        </div>
                        <div className="navbar__account">
                            <a href="/account">
                                <img src={account} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
