import React from "react";
import Rating from "../../common/Rating/Rating";
import {rateProduct} from '../../../store/products/actions'

function Product({ product = {} }) {
  return (
    <div className="product">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Rating {...product} action={rateProduct}/>
    </div>
  );
}

export default Product;
