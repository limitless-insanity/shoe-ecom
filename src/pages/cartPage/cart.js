import { CartCard, PriceBox } from "./components";
import {} from "../../components";
import "./cart.css";
import { useCart } from "../../context/cartContext";
import { useEffect } from "react";
import { ScrollToTop } from "../../hook/scrollToTop";
export function Cart() {
  const { cartState } = useCart();
  const { cartItem } = cartState;
  useEffect(ScrollToTop, []);
  return (
    <>
      <section className="main-box">
        {cartItem.length === 0 && (
          <div className="empty-box">
            <p className="heading-lg emptybox-text">Your cart is empty</p>
            <i className="bi bi-cart-x"></i>
          </div>
        )}
        <div className="checkout-layout grid-two">
          <div className="cart-item">
            {cartItem.map((product) => (
              <CartCard key={product._id} product={product} />
            ))}
          </div>
          <div className="checkout-box">
            {cartItem.length > 0 && <PriceBox />}
          </div>
        </div>
      </section>
    </>
  );
}
