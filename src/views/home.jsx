import React from "react";
import Navbar from "../components/navbar/navbar";
import Latest from "../components/latest/latest";
import Category from "../components/category/category";
import Blog from "../components/blog/blog";
import Newsletter from "../components/newsletter/newsletter";
import Footer from "../components/footer/footer";
const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Latest />
            <Category />
            <Blog />
            <Newsletter />
            <Footer />
        </div>
    );
};
export default Home;
