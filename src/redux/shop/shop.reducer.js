import SHOP_DATA from "./shop.data";
import ShopActionType from "./shop.types";

const INTIAL_STATE = { collections: SHOP_DATA };

const shopReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionType.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
