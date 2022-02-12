import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.componenet";
import ShopPage from "./pages/shop/shop.componenet";
import Header from "./components/header/header.componenet";
import SignInUp from "./pages/sign-in-up/sign-in-up.componenet";
import CheckoutPage from "./pages/checkout/checkout.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  // it'll always run when the selector function passed to
  // to it will receive a new value

  // useSelector can be called multiple times
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // since we making the effect depend on dispatch
    // this efffect will work only 1 time when this
    // component mounts
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInUp />)}
        />
      </Switch>
    </div>
  );
};

export default App;
