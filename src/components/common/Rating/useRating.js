import { useState } from 'react';
import { useDispatch } from "react-redux";

export function useRating(id, currentRating, action) {
  const [rating, setState] = useState(currentRating);
  const dispatch = useDispatch();

  const onClick = (event) => {
    if (event && event.target) {
      const rating = event.target.dataset.rating;
      setState(rating);
      dispatch(action(id, rating));
    }
  }

  const onMouseOver = (event) => {
    if (event && event.target) {
      dispatch(action(id, event.target.dataset.rating));
    }
  }

  const onMouseOut = (event) => {
    if (event && event.target) {
      dispatch(action(id, rating));
    }
  }

  return {
    onClick,
    onMouseOut,
    onMouseOver
  }
}
