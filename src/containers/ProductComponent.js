

import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import './ProductComponents.css'

const ProductComponent = ({product}) => {
  // const products = useSelector((state) => state.allProducts.products);
 

    //  const renderList =  products.map((product) => {
    const { id, name, img1, price, category ,delivery,reviews,discount, ratings,   } = product;



    
    return (
      <div className="subBox">
        <Link to={`/product/${id}`}>
                    <div className="card" >
                  <div className="image">
                    <img src={img1} alt={name} />
                  </div>
                  <div className="content">
                    <h4 className="name">{name}</h4>

                    <div className='flex' >
                      <h2 className='price'>$ {price} | </h2>
                      <h4 className='discount'>$ {category}{discount} | </h4>
                      <h4> {(price-discount)/100}% OFF  </h4>
                    </div>
                    <div>
                      <div className="meta price">{delivery} Delivery</div>
                      <div>{category}</div>
                    </div>
                    <div className="meta">{ratings} | {reviews} Reviews</div>
                  </div>
                </div>
        </Link>
      </div>
    );
  // }
  // );
  // return <>{renderList}</>;
};

export default ProductComponent;











  
  

