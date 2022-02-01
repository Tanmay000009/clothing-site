import ShopActionType from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errMessage) => ({
  type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
  payload: errMessage,
});

// redux-thunk is only intrested in functions as its a middleware
// it isnt intrested in above functions as they return action objects

// while this fetchCollections..nc returns is a function, so it intercepts
export const fetchCollectionsStartAsync = () => {
  // here dispatch is provided by redux-thunk
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((err) => dispatch(fetchCollectionsFailure(err.message)));
  };
};
// or we can make a rest api call
// but reponse is extremely nested so better to use of any of below methods
// fetch(
//   "https://firestore.googleapis.com/v1/projects/clothing-db-10a46/databases/(default)/documents/collections"
// ).then((response) => response.json());

// we migrate to promises
// only diff is now we wont auto-render and re-fetch it if there's any update on
// db, as we dont subscribe now to it

//  here we use CollectionRef to make a call

// collectionRef.get().then((snapshot) => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   updateCollections(collectionsMap);
//   this.setState({ loading: false });
// });

// this.unSubscribeFromSnapshot = collectionRef.onSnapshot(
//   async (snapshot) => {
//     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//     updateCollections(collectionsMap);
//     this.setState({ loading: false });
//   }
// );
