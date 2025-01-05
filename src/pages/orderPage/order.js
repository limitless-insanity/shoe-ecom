import React, { useEffect } from "react";
import { Navbar } from "../../components";
import { useOrder } from "../../context";
import { ScrollToTop } from "../../hook/scrollToTop";
import "./order.css";

export const Order = () => {
  const {
    order: { order, address },
  } = useOrder();
  useEffect(ScrollToTop, []);
  return (
    <>
      <Navbar />
      {order.length === 0 && (
        <div className="empty-box wishlist-box-placeholder">
          <p className="heading-lg emptybox-text">No Orders</p>
          <i className="bi bi-emoji-neutral"></i>
        </div>
      )}

      <main>
        <section className="main-box wishlist-box order-Box">
          {order.length !== 0 && (
            <span className="heading-lg">Your Orders</span>
          )}
          {order.map((item) => (
            <div className="order-item" key={item._id}>
              <div className="notification-list">
                <div className="notify-img">
                  <img src={item.image} alt="demo img" />
                </div>
                <div className="notify-contant">
                  <p className="heading-lg">{item.productName}</p>
                  <p className="gray-text">Price - {item.price}</p>
                  <p className="notify-time">2 minute ago</p>
                </div>
              </div>
            </div>
          ))}
          {Object.keys(address).length !== 0 && (
            <div className="order-address">
              <h3>Deliver To</h3>
              <p className="text-lg">{address.userName}</p>
              <p>
                {address.area}, {address.state}
              </p>
              <p>{address.city}</p>
              <p>Phone No. - {address.phNumber}</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
};
