// at starting of our app we need to call each saga manually
// better practice to call all the sagas which we want to call
// at starting of app using all and call, and call this root-saga in shop

// so we dont have to code sagaMiddleware.run(fetchCollectionsStart);
// for diff sagas again and again

// all helps us in calling multiple sagas at once
import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.sagas";
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
