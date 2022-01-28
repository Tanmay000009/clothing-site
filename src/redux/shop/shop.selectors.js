import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  // Object.keys(object) returns an array of key
  // we map over it and get the items array
  // collection overview can use .map on this array
  (collections) => Object.keys(collections).map((key) => collections[key])
);

// this function returns object, as we normalized the data
// map cannot be used for object, so we created above function
// to return data in form of array
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
