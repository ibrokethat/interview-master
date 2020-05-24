import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export function dataLoaderFactory(action, selector) {
  return (...args) => {
    const dispatch = useDispatch();
    const items = useSelector(selector);
    useEffect(() => {
      dispatch(action(...args));
    }, [dispatch]);
    return items || [];
  }
}
