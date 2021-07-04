import React from "react";
import phone from "../../images/smartphone.svg";
import tablet from "../../images/tablet.svg";
import laptop from "../../images/lattop.svg";
import addon from "../../images/addons.svg";
import "./category.css"
const Category = () => {
    return (
        <div className="category container">
            <h1 className="category__title">Categories</h1>
            <div className="category__grid">
                <div className="category__card">
                    <img className="card__img" src={phone} alt="" />
                    <h1 className="card__title">Smartphones</h1>
                </div>
                <div className="category__card">
                    <img className="card__img" src={tablet} alt="" />
                    <h1 className="card__title">Tablets</h1>
                </div>
                <div className="category__card">
                    <img className="card__img" src={laptop} alt="" />
                    <h1 className="card__title">Laptops</h1>
                </div>
                <div className="category__card">
                    <img className="card__img" src={addon} alt="" />
                    <h1 className="card__title">Accessories</h1>
                </div>
            </div>
        </div>
    );
};

export default Category;
