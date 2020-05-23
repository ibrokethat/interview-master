import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../../store/products/actions";
import Product from "./Product";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <div className="products">
      {products.map(product => (
        <Product product={product} />
      ))}
    </div>
  );
}

export default Products;
