import { useState } from 'react';
import { useDispatch } from "react-redux";

export function useRating(id, currentRating, action) {
  const [rating, setState] = useState(currentRating);
  const dispatch = useDispatch();

  const onClick = (event) => {
    if (event && event.currentTarget) {
      const rating = event.currentTarget.dataset.rating;
      setState(rating);
      dispatch(action(id, rating));
    }
  }

  const onMouseOver = (event) => {
    if (event && event.currentTarget) {
      dispatch(action(id, event.currentTarget.dataset.rating));
    }
  }

  const onMouseOut = (event) => {
    if (event && event.currentTarget) {
      dispatch(action(id, rating));
    }
  }

  return {
    onClick,
    onMouseOut,
    onMouseOver
  }
}
