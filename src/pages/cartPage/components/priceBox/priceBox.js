import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../../../context/cartContext";

import { useAddress, useOrder } from "./../../../../context";
import "./pricebox.css";

export const PriceBox = () => {
  const { cartState, cartDispatch } = useCart();
  const { addressState } = useAddress();
  const { setOrder } = useOrder();

  const navigate = useNavigate();

  const [selectedAddress, setSelectedAddress] = useState({});

  const { cartItem } = cartState;
  const totalQuantityReducer = (pre, cur) => pre + cur.quantity;
  const totalQuantity = cartItem.reduce(totalQuantityReducer, 0);

  const ProductAmountReducer = (pre, cur) => pre + cur.quantity * cur.price;
  const ProductAmount = cartItem.reduce(ProductAmountReducer, 0);

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (totalAmount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      toast.error("Razorpay SDK failed to load, check you connection");
      return;
    }

    const options = {
      key: "rzp_test_M7jr3sNuOwTIPE",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Shoe Zone",
      description: "Thank you for shopping with us",
      image:
        "https://github.com/rutvikpumak/pustaka-ecom/blob/dev/images/logo.png?raw=true",
      handler: function () {
        setOrder((pre) => {
          return { ...pre, address: selectedAddress, order: cartItem };
        });
        navigate("/order");
        cartDispatch({ type: "EMPTY_CART" });
      },
      prefill: {
        name: `${"harshit"} ${"paliwal"}`,
        email: "harshit@gmail.com",
        contact: "9876543210",
      },
      theme: {
        color: "#007bb5",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    return paymentObject;
  };

  const AmountReducer = (pre, cur) => pre + cur.quantity * cur.price;
  let totalAmount = cartItem.reduce(AmountReducer, 1000);
  totalAmount -= 999;

  const orderHandler = async () => {
    if (Object.keys(selectedAddress).length !== 0) {
      displayRazorpay(totalAmount);
    } else {
      toast.error("select address");
    }
  };

  return (
    <div className="checkout-box">
      <div className="place-order-box">
        <h3>PRICE DETAILS</h3>
        <div className="charges-box">
          <div className="space-between">
            <span className="heading-sm">Price ({totalQuantity} items)</span>
            <span className="heading-sm">₹{ProductAmount}</span>
          </div>
          <div className="space-between">
            <span className="heading-sm">Discount</span>
            <span className="heading-sm">- ₹999</span>
          </div>
          <div className="space-between">
            <span className="heading-sm">Delivery Charges</span>
            <span className="heading-sm">₹1000</span>
          </div>
        </div>
        <div className="space-between">
          <h3>Total Amount</h3>
          <h3>₹{totalAmount}</h3>
        </div>
        <p className="gray-text save-lable">
          You will save ₹2000 on this order
        </p>
        <div className="space-between deliver-box">
          <h3>DELIVER TO</h3>
        </div>
        <div className="text-medium">
          <fieldset>
            {addressState.map((item) => (
              <label key={item.addressId} htmlFor={item.userName}>
                <span>
                  <p className="text-lg">
                    {" "}
                    <input
                      type="radio"
                      id={item.userName}
                      name="address"
                      onChange={() => setSelectedAddress(item)}
                    ></input>{" "}
                    {item.userName}
                  </p>
                  <p>
                    {item.area}, {item.state}
                  </p>
                  <p>{item.city}</p>
                  <p>Phone No. - {item.phNumber}</p>
                </span>
              </label>
            ))}
          </fieldset>
        </div>
        <button className="btn btn-dark" onClick={() => orderHandler()}>
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};
