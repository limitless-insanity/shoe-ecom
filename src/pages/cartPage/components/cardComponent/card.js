import { useCart, useWishlist } from "../../../../context";
import { findItem } from "../../../../utils";

import "./card.css";
import { toast } from "react-toastify";
export const CartCard = ({ product }) => {
  const { _id, image, productName, price } = product;

  const { cartDispatch } = useCart();

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const isItemInWishlist = findItem(wishlist, _id);
  const addToWishlistHandler = (product) => {
    if (isItemInWishlist) {
      toast.info("Product Alreay In Your Wishlist");
    } else {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: product,
      });
      toast.success("Product Added To Wishlist");
    }
  };

  return (
    <div className="card-component-cart">
      <div className="horizontal-card">
        <div className="card-side-img">
          <img className="card-side-img" src={image} alt="demo img" />
        </div>
        <div className="card-comp-contant">
          <h4 className="card-h2 heading-sm">{productName}</h4>
          <div className="item-quantity">
            <button className="btn-icon">
              <i
                className="bi bi-dash"
                onClick={() =>
                  cartDispatch({ type: "DIC_ITEM", payload: product })
                }
              ></i>
            </button>
            <div className="quantity-number">{product.quantity}</div>
            <button className="btn-icon">
              <i
                className="bi bi-plus"
                onClick={() =>
                  cartDispatch({ type: "INC_ITEM", payload: product })
                }
              ></i>
            </button>
          </div>
          <h5 className="price-tag">RS: {price}</h5>
          <button
            className="btn btn-small btn-dark"
            onClick={() => addToWishlistHandler(product)}
          >
            Move To Wishlist
          </button>
          <button
            className="btn btn-small btn-dark"
            onClick={() =>
              cartDispatch({ type: "REMOVE_FROM_CART", payload: _id })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
