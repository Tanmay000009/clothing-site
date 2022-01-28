import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
const ShopPage = ({ match }) => (
  <div className="shop-page">
    {/* Here we use match.path, so we only have to worry about routing ahead of this point */}
    {/* We only need to worry about /match.path/xyz, as it'll will give us whats behind  */}
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);
export default ShopPage;
