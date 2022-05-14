// import logo from './logo.svg';
import "./App.css";
// import {BrowserRouter as Router} from 'react-router-dom'
import { Route, Switch, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";

import HomeBottom from "./containers/HomeBottom";
import Cartpage from "./containers/Cartpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeBottom />} />

        <Route exact path="/product" element={<ProductList />} />
        <Route exact path="/product/cart" element={<Cartpage />} />
        <Route exact path="/product/checkout" element=""></Route>

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route>404 not found!!!</Route>
      </Routes>
    </div>
  );
}

export default App;
