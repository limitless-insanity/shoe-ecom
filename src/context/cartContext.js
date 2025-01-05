import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();
export const initialCartState = {
  cartItem: [],
};
const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
