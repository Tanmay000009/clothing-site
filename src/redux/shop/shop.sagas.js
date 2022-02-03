import { call, put, takeLatest } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionType from "./shop.types";

// all function* (generator) functions must have yields in em
export function* fetchCollectionsAsync() {
  const collectionRef = firestore.collection("collections");
  const snapshot = yield collectionRef.get();

  try {
    // call is just used to call async functions (which take long time to return)
    // we give control to saga middleware, using yield
    // the second part of params are just params we pass to function
    // return from call is set to the variable on left (collectionsMap)
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // put is saga effect for creating actions
    // put is dispatch in terms of saga
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message));
  }

  // collectionRef
  //   .get()
  //   .then((snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     fetchCollectionsSuccess(collectionsMap);
  //   })
  //   .catch((err) => fetchCollectionsFailure(err.message));
}

// since takeEvery can be called multiple times, if we want supppose only the last time its
// called to invoke the passed function, we can use takeLatest instead of takeEvery

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionType.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

// export function* fetchCollectionsStart() {
//   // takeEvery means we listen for every call for the action
//   // unlike take, it will console log again and again
//   // it'll generate a call to the generator function passsed every time
//   yield takeEvery(
//     ShopActionType.FETCH_COLLECTIONS_START,
//     fetchCollectionsAsync
//   );
// }

// in case of take-every, saga will wait specifically for this action to take place
// we can also get the payload from this take as a promise like:
// const incrementPayload = yield take("INCREMENT")

// Rest of code wont execute untill take operates

//  this will only fire of once, after doing last task, its in done state

// export function* incrementSaga() {
//   yield take("INCREMENT");
// }

// we can make take work like takeEvery, by calling it in a while loop
// but it's of blockng nature, since its chained in a way
// whereas, takeEvery is non blocking as it invoking a new set of funtion every time

//
