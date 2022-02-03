import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.componenet";
import ShopPage from "./pages/shop/shop.componenet";
import Header from "./components/header/header.componenet";
import SignInUp from "./pages/sign-in-up/sign-in-up.componenet";
import CheckoutPage from "./pages/checkout/checkout.component";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    // an observer here has subscribed to auth lib observables to lookout for any updates/changes
    // there.
    //
    // observer essentially passes a middleware through which it can lookout for changes
    // and update here
    //
    // when the component unmounts we need to unsubscirbe as that stream of data
    // holds no meaning for us now
    //
    // here auth library returns a function for observer here to unsubscribe from
    // stream of events in the auth library (like user changes)
    //
    // this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot((snapshot) => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data(),
    //       });
    //     });
    //   }
    //   setCurrentUser(userAuth);
    // });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
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
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
