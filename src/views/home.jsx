import React from "react";
import Navbar from "../components/navbar/navbar";
import Latest from "../components/latest/latest";
import Category from "../components/category/category";
import Blog from "../components/blog/blog";
const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Latest />
            <Category />
            <Blog />
        </div>
    );
};
export default Home;
