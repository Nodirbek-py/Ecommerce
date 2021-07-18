import React from "react";
import Home from "./views/home";
import List from "./views/list";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Detail from "./views/detail";
import Blog from "./views/blog";
import Cart from "./views/cart";
import Account from "./views/account";
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
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/account" component={Account} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};
export default App;
