import {
  Home,
  Login,
  Wishlist,
  Cart,
  Product,
  SignUp,
  Order,
  Profile,
  SingleProduct,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import { ProtectedRoute } from "./hook/protectedRoute";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/product" element={<Product />} />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
