import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer/wishlistReducer";

const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
