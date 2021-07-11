import React from "react";
import Latest from "../components/latest/latest";
import Category from "../components/category/category";
import Blog from "../components/blog/blog";
import Newsletter from "../components/newsletter/newsletter";
const Home = () => {
    return (
        <div className="home">
            <Latest />
            <Category />
            <Blog />
            <Newsletter />
        </div>
    );
};
export default Home;
