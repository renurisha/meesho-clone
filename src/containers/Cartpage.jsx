import React, { useEffect, useState } from "react";
import "./cartpage.css";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Cartpage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);

  var total = 0;

  const removecard = (card) => {
    axios.delete(`http://localhost:3001/cart/${card.id}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    const posts = state.filter((item) => item.id !== card.id);
    setState(posts);
  };

  const Cartitems = (cart) => {
    total = total + +cart.price;

    return (
      <div className="cart-items-container">
        <div className="cart-img-div">
          <img src={cart.img1} alt="" />
        </div>
        <div className="cart-info">
          <span>{cart.name}</span>
          <br />
          <span>{cart.price}</span>
          <br />
          <span>{cart.description}</span>
          <br />
          <span>{cart.delivery}</span>
        </div>
        <span className="cross" onClick={() => removecard(cart)}>
          x
        </span>
      </div>
    );
  };

  useEffect(() => {
    axios
      .get(" http://localhost:3001/cart")
      .then((res) => {
        setState(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [state]);

  console.log("state......", state);
  return (
    <div className="cart-container">
      <div className="cart-navbar">
        <b>
          <u>Your Product Details</u>
        </b>
      </div>
      <div className="cart-body">
        <div className="cart-left">{state.map(Cartitems)}</div>
        <div className="cart-right">
          <div className="cart-details-with-price">
            <p>Price Details</p>
            <span style={{ padding: "50px" }}>Total Product Price</span>
            <span>${total}</span>
          </div>
          <div>
            <Link to="/product/checkout">
              {" "}
              <Button variant="outlined"> Buy Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
