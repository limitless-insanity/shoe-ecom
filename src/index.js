import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AddressProvider,
  AuthProvider,
  CartProvider,
  FilterContextProvider,
  OrderProvider,
  WishlistProvider,
} from "./context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AddressProvider>
        <OrderProvider>
          <FilterContextProvider>
            <CartProvider>
              <WishlistProvider>
                <Router>
                  <App />
                </Router>
              </WishlistProvider>
            </CartProvider>
          </FilterContextProvider>
        </OrderProvider>
      </AddressProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
