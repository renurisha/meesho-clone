export const ADD_CART = "ADD_CART";
export const INC_PRICE_QUANTITY="INC_PRICE_QUANTITY";
export const DELETE_CART="DELETE_CART";

export const addcart = (value) => {
  return {
    type: ADD_CART,
    payload: value,
  };
};
export const incpricequantity = (value) => {
  return {
    type: INC_PRICE_QUANTITY,
    payload: value,
  };
};
export const deleteCart=(value)=>{
  return {
    type:DELETE_CART,
    payload:value
  }

}
