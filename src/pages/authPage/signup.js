import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css";
import { useAuth } from "../../context/authContext";
import { ScrollToTop } from "../../hook/scrollToTop";

export function SignUp() {
  const [name, setName] = useState("harshit");
  const [email, setEmail] = useState("harshit@gmail.com");
  const [password, setPassword] = useState("1234");
  const [showPassword, setShowPassword] = useState("password");

  const navigate = useNavigate();
  useEffect(ScrollToTop, []);
  const { setAuth } = useAuth();

  const signupHandler = async () => {
    const body = {
      email: email,
      password: password,
      name: name,
      lastName: "",
    };
    try {
      const response = await axios.post("/api/auth/signup", body);
      localStorage.setItem("token", response.data.encodedToken);
      toast.success("Sign Up Succesfully");
      setAuth((pre) => ({
        ...pre,
        token: response.data.encodedToken,
        isAuth: true,
        useName: name,
        userEmail: email,
      }));
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      toast.error("Failed to SignUp try Again");
    }
  };

  return (
    <div>
      <main>
        <div className="form-container">
          <div className="form-info">
            <p className="heading-x-lg text-center">Join-us</p>
            <div className="form-input">
              <div className="input-box">
                <label className="text-medium">Full name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Monkey D luffy"
                />
              </div>
              <div className="input-box">
                <label className="text-medium">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="demo@yahoo.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box">
                <label className="text-medium">Password</label>
                <input
                  type={showPassword}
                  name="password"
                  placeholder="*******"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="btn-icon"
                  onClick={() =>
                    setShowPassword(
                      showPassword === "password" ? "text" : "password"
                    )
                  }
                >
                  <i
                    className={`bi bi-eye${
                      showPassword === "password" ? "" : "-slash"
                    }`}
                  ></i>
                </button>
              </div>
              <div className="space-between forget-pass">
                <span>
                  <label className="text-medium">
                    <input type="checkbox" /> I accept all term & condition
                  </label>
                </span>
              </div>
              <div className="form-btn">
                <button
                  className="btn btn-outline"
                  onClick={() => signupHandler()}
                >
                  Sign Up
                </button>
              </div>

              <div className="new-ac">
                <Link to="/login">
                  <p className="text-center">
                    Already have an account
                    <i className="bi bi-chevron-compact-right"></i>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
