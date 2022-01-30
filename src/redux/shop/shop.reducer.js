import ShopActionType from "./shop.types";

const INTIAL_STATE = { collections: null };

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
