import React from "react";
import phone from "../../images/telephone.svg";
import insta from "../../images/instagram.svg";
import fb from "../../images/facebook.svg";
import tg from "../../images/telegram.svg";
import "./footer.css";
const Footer = () => {
    return (
        <div className="footer__background">
            <div className="footer container">
                <div className="footer__col">
                    <p className="footer__text">
                        2021 © All rights are reserved
                    </p>
                </div>
                <div className="footer__col">
                    <h1 className="footer__title">Contact us</h1>
                    <p className="footer__text">
                        <img className="footer__icon" src={phone} alt="" />
                        +998 99 3157686 | +998 90 5717840
                    </p>
                </div>
                <div className="footer__col">
                    <h1 className="footer__title">We are in social networks</h1>
                    <div className="footer__socials">
                        <img src={fb} alt="" className="footer__icon" />
                        <img src={insta} alt="" className="footer__icon" />
                        <img src={tg} alt="" className="footer__icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
