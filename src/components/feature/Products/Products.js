import React from "react";
import { useDataLoader } from "./use-data-loader";
import Product from "./Product";

function Products() {
  const products = useDataLoader()
  return (
    <div className="products">
      {products && products.map(product => (
        <Product product={product} key={`product-key-${product.id}`} />
      ))}
    </div>
  );
}

export default Products;
