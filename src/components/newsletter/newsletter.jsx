import React from "react";
import "./newsletter.css";
const Newsletter = () => {
    const [email, setEmail] = React.useState();
    return (
        <div className="newsletter container">
            <div className="newsletter__box">
                <div className="newsletter__text">
                    <h1 className="newsletter__title">
                        If you want to get in touch with us, subscribe for news
                    </h1>
                </div>
                <div className="newsletter__form">
                    <input
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        className="newsletter__input"
                        type="email"
                        placeholder="Your email"
                    />
                    <button className="newsletter__btn">Subscribe</button>
                </div>
            </div>
        </div>
    );
};
export default Newsletter;
