import axios from "axios";
import { useEffect } from "react";
import { ADD_CART } from "./action";
import { DELETE_CART } from "./action";

import { INC_PRICE_QUANTITY } from "./action";

const init = {
  count: 0,
  price: 0,
  cartproduct: [],
};
export const cartReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_CART:
      const { product, qty } = payload;

      const check = state.cartproduct.find((pr) => pr.id === product.id);
      if (check) {
        return {
          ...state,

          cartproduct: [...state.cartproduct],
        };
      } else {
        return {
          ...state,

          cartproduct: [...state.cartproduct, product],
        };
      }
    case INC_PRICE_QUANTITY:
      return {
        ...state,
        count: +state.count + 1,
        price: +state.price + +payload.price,
      };
    case DELETE_CART:
      console.log("payload", payload);
      const newlist = state.cartproduct.filter((x) => {
        console.log("payload", x);

        return x.id != payload.id;
      });
      console.log("newlist", newlist);
      return {
        ...state,
        cartproduct: [...newlist],
      };

    default:
      return state;
  }
};
