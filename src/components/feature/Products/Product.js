import React from "react";
import Rating from "../../common/Rating/Rating";

function Product({ product }) {
  return (
    <div className="product">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Rating />
    </div>
  );
}

export default Product;
