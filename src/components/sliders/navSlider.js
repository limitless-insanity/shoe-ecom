import { useLocation, useNavigate } from "react-router-dom";
import { useFilter } from "../../context/filterContext";
import { Filter } from "../filter/filter";
import "./navSlider.css";

export const NavSlider = () => {
  const { dispatch } = useFilter();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="nav-slider-bar">
      {pathname !== "/product" && (
        <span>
          <div className="sidebar-title heading-lg">CATEGORIES</div>
          <p
            className="nav-links text-lg"
            onClick={() => {
              navigate("/product");
              dispatch({ type: "FILTER", payload: "" });
            }}
          >
            Shop Now
          </p>
          <p
            className="nav-links text-lg"
            onClick={() => {
              navigate("/product");
              dispatch({ type: "FILTER", payload: "man" });
            }}
          >
            Man
          </p>
          <p
            className="nav-links text-lg"
            onClick={() => {
              navigate("/product");
              dispatch({ type: "FILTER", payload: "women" });
            }}
          >
            Women
          </p>
          <p
            className="nav-links text-lg"
            onClick={() => {
              navigate("/product");
              dispatch({ type: "FILTER", payload: "kid" });
            }}
          >
            Kids
          </p>
        </span>
      )}
      {pathname === "/product" && <Filter />}
    </div>
  );
};
