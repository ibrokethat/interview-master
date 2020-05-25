import { useState } from 'react';
import { useDispatch } from "react-redux";

export function useRating(id, initialRating, action) {
  const [rating, setState] = useState(initialRating);
  const [currentRating, setCurrentState] = useState(initialRating);
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
      setCurrentState(event.currentTarget.dataset.rating);
    }
  }

  const onMouseOut = (event) => {
    if (event && event.currentTarget) {
      setCurrentState(rating);
    }
  }

  return {
    currentRating,
    onClick,
    onMouseOut,
    onMouseOver
  }
}
