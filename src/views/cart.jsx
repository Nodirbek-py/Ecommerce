import React from "react";
import "./main.css"
const Cart = () => {
    return (
        <div className="cart container">
            <div className="cart__list">
                <div className="cart__item">
                    <div className="item__img">
                        <img src="https://picsum.photos/150" alt="" />
                    </div>
                    <div className="item__info">
                        <div className="info__row">
                            <h1>Title of Good</h1>
                        </div>
                        <div className="info__row">
                            <h2>Quantity of the Good</h2>
                        </div>
                    </div>
                    <div className="item__totl">
                        <h1>Total: 169$</h1>
                    </div>
                </div>
                <div className="cart__item">
                    <div className="item__img">
                        <img src="https://picsum.photos/150" alt="" />
                    </div>
                    <div className="item__info">
                        <div className="info__row">
                            <h1>Title of Good</h1>
                        </div>
                        <div className="info__row">
                            <h2>Quantity of the Good</h2>
                        </div>
                    </div>
                    <div className="item__totl">
                        <h1>Total: 169$</h1>
                    </div>
                </div>
            </div>

            <div className="cart__checkout">
                <button className="btn">Checkout</button>
            </div>
        </div>
    );
};
export default Cart;
