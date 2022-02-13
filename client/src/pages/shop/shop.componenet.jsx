import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionOverviewContainer from "../../components/collections-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      {/* Here we use match.path, so we only have to worry about routing ahead of this point */}
      {/* We only need to worry about /match.path/xyz, as it'll will give us whats behind  */}
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
