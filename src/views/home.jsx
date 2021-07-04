import React from 'react'
import Navbar from "../components/navbar/navbar"
import Latest from "../components/latest/latest"
import Category from '../components/category/category'
const Home = () => {
    return (
        <div className="home">
        <Navbar/>
        <Latest/>
        <Category/>
        </div>
    )
}
export default Home;