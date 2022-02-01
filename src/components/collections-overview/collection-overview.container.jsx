import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import collectionsOverviewComponent from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionsOverviewComponent);

// Above is equivalent of:

// const CollectionOverviewContainer =
// connect(mapStateToProps)(
//   WithSpinner(collectionsOverviewComponent)
// );

export default CollectionOverviewContainer;
