import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/ProductAction";
import ProductComponent from "./ProductComponent";
import "./ProductComponents.css";
import { useState } from "react";
const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [price, setPrice] = useState("price");
  const [order, setOrder] = useState();

  const fetchProducts = async () => {
    const response = await axios
      // .get("https://fakestoreapi.com/products")
      .get("http://localhost:3001/products", {
        params: {
          _sort: price,
          _order: order,
        },
      })

      .catch((err) => {
        console.log("Err: ", err);
      });
    // console.log("res:",response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, [order]);

  console.log("Products :", products);
  return (
    <>
      <div>
        {" "}
        <button
          onClick={() => {
            setOrder("asc");
          }}
        >
          low to high
        </button>
        <button
          onClick={() => {
            setOrder("desc");
          }}
        >
          high to low
        </button>
      </div>

      <div className="mainBox">
        {products.map((e) => {
          return <ProductComponent product={e} key={e.id} />;
        })}

        {/* <sortedList/> */}
      </div>
    </>
  );
};

export default ProductPage;
