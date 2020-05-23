import React from "react";

function Product({ rating = 3, maxRating = 5 }) {
  const generateRating = () => {
    let finalRating = [];
    for (let x = 0; x < maxRating; x += 1) {
      finalRating.push(
        <div className={`rating-pip ${x + 1 <= rating ? "active" : ""}`} />
      );
    }
    return finalRating;
  };

  return <div class="rating">{generateRating()}</div>;
}

export default Product;
