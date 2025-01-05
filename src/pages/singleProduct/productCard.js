import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart, useWishlist } from "../../context";
import { findItem } from "../../utils";

export const ProductCard = ({ product }) => {
  const { _id, image, productName, categoryName, price, discount, rating } =
    product;

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const {
    cartState: { cartItem },
    cartDispatch,
  } = useCart();
  const {
    auth: { isAuth },
  } = useAuth();

  const [cartBtnText, setCartBtnText] = useState("Add To Cart");
  const [wishlistBtnText, setWishlistBtnText] = useState("Add To Wishlist");
  const navigate = useNavigate();

  const isItemInCart = findItem(cartItem, _id);
  const isItemInWishlist = findItem(wishlist, _id);

  useEffect(() => {
    if (isAuth) {
      if (isItemInCart) {
        setCartBtnText("Go To Cart");
      }
      if (isItemInWishlist) {
        setWishlistBtnText("Go To Wishist");
      }
    } else {
      setCartBtnText("Add To Cart");
      setWishlistBtnText("Add To Wishist");
    }
  }, [isItemInCart, isAuth, isItemInWishlist]);
  const addToCartHandler = (product) => {
    if (isAuth) {
      if (isItemInCart) {
        navigate("/cart");
      } else {
        cartDispatch({
          type: "ADD_TO_CART",
          payload: product,
        });
        toast.success("Product Added To Cart");
      }
      setCartBtnText("Go To Cart");
    } else {
      navigate("/login");
    }
  };

  const addToWishlistHandler = (product) => {
    if (isAuth) {
      if (isItemInWishlist) {
        navigate("/wishlist");
      } else {
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: product,
        });
        toast.success("Product Added To Wishlist");
      }
      setWishlistBtnText("Go To Wishist");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="img-box">
        <img src={image} alt="productImg"></img>
      </div>
      <div className="product-content">
        <p className="main-heading">{productName}</p>
        <p className="text-lg">{categoryName}'s shoes</p>
        <p className="gray-text text-medium">by Nike</p>
        <p className="text-medium">
          Familiar but always fresh, the iconic Air Jordan 1 is remastered for
          today's sneakerhead culture. This Retro High OG version goes all in
          with premium leather, comfortable cushioning and classic design
          details.
        </p>
        <h3>RS {price}</h3>
        <p className="discount-tag">{discount}% off</p>
        <div className="rating-box rating-box-sm rating-comp">
          <div>
            {rating} <i className="bi bi-star-fill"></i>
          </div>
          <div>|</div>
          <div>5</div>
        </div>
        <div className="action-btn-box">
          <button
            className="btn btn-outline"
            onClick={() => addToCartHandler(product)}
          >
            {cartBtnText}
          </button>
          <button
            className="btn btn-outline"
            onClick={() => addToWishlistHandler(product)}
          >
            {wishlistBtnText}
          </button>
        </div>
      </div>
    </>
  );
};
