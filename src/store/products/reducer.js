import { LOAD_PRODUCTS, RATE_PRODUCT } from "./actions";

export const products = (
  state = {
    list: []
  },
  action
) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { list: action.payload };

    case RATE_PRODUCT:
      const {list} = state;
      const index = list.findIndex((item) => item.id === action.id);

      return {
        list: [
          ...list.slice(0, index),
          { ...list[index], rating: action.rating },
          ...list.slice(index + 1),
        ]
      };

    default:
      return state;
  }
};
