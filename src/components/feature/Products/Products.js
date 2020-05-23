import React from "react";
import { useDataLoader } from "./useDataLoader";
import Product from "./Product";

function Products() {
  const products = useDataLoader()
  return (
    <div className="products">
      {products.map(product => (
        <Product product={product} key={`product-key-${product.id}`} />
      ))}
    </div>
  );
}

export default Products;
