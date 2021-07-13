import React from "react";
import Home from "./views/home";
import List from "./views/list";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Detail from "./views/detail"
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={List} />
                <Route exact path="/products/:id" component={Detail} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};
export default App;
