import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./views/home";
import SideBar from "./components/listPage/sidebar/index";
import "./style.css";

const App = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Navbar />
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //     <Footer />
    //   </Switch>
    // </Router>
    <>
      <Navbar />
      <SideBar />
      <Footer />
    </>
  );
};
export default App;
