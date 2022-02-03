// at starting of our app we need to call each saga manually
// better practice to call all the sagas which we want to call
// at starting of app using all and call, and call this root-saga in shop

// so we dont have to code sagaMiddleware.run(fetchCollectionsStart);
// for diff sagas again and again

// all helps us in calling multiple sagas at once
import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}
