import { createContext, useState } from "react";
export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cartshow, setCartshow] = useState([]);
  const [totalcartprice, setTotalcartprice] = useState(0);
  const cartshowFun = (product) => {
    console.log("context-product:", product);

    setCartshow([...cartshow, product]);
   
    setTotalcartprice(+totalcartprice + +product.price);
  };

  return (
    <CartContext.Provider value={{ cartshow, cartshowFun }}>
      {children}
    </CartContext.Provider>
  );
};
