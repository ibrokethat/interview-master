import React from "react";
import { useRating } from './use-rating';

function Rating({ rating = 3, maxRating = 5, id, action }) {
  const { currentRating, onClick, onMouseOver, onMouseOut } = useRating(id, rating, action);

  const generateRating = () => {
    let finalRating = [];
    for (let x = 0; x < maxRating; x += 1) {
      finalRating.push(
        <div
          className={`rating-pip ${x + 1 <= currentRating ? "active" : ""}`}
          data-rating={x + 1}
          key={`rating-key-${x + 1}`}
          onClick={onClick}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
        />
      );
    }
    return finalRating;
  };

  return <div className="rating">{generateRating()}</div>;
}

export default Rating;
