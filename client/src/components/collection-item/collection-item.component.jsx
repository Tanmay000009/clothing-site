import React from "react";
import { useDispatch } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  const dispatch = useDispatch();

  const addItemHandler = (item) => dispatch(addItem(item));

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton
        className="custom-button"
        inverted
        onClick={() => addItemHandler(item)}
      >
        {" "}
        Add to cart{" "}
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
