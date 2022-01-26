import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.componenet";
import ShopPage from "./pages/shop/shop.componenet";
import Header from "./components/header/header.componenet";
import SignInUp from "./pages/sign-in-up/sign-in-up.componenet";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
