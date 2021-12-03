import { useSelector, useDispatch } from "react-redux";

const useCart = () => {
  const items = useSelector((state) => state.items);
  const subtotal = useSelector((state) => state.price);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch({
      type: "TOGGLE_CART",
    });
  };

  const addToCart = (item) => {
    dispatch({
      type: "ADD",
      payload: item,
    });
  };

  const removeFromCart = (item) =>
    dispatch({
      type: "REMOVE",
      payload: item,
    });

  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };

  return {
    items,
    subtotal,
    toggleCart,
    addToCart,
    emptyCart,
    removeFromCart,
  };
};

export default useCart;
