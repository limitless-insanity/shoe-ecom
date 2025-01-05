import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFilter } from "../../context/filterContext";
import { ScrollToTop } from "../../hook/scrollToTop";
import { ProductCard } from "./productCard";
import "./singleProduct.css";
export const SingleProduct = () => {
  const { id } = useParams();

  const { dispatch } = useFilter();

  const [item, setItem] = useState([]);
  useEffect(() => {
    ScrollToTop();
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        dispatch({ type: "DEFAULT", payload: products });
        if (products) {
          const item = products.filter((item) => item._id === `${id}`);
          setItem(item);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    })();
  }, [dispatch, id]);

  return (
    <div className="single-product">
      <div className="grid-two single-box">
        {item.length !== 0 &&
          item.map((item) => <ProductCard key={item?._id} product={item} />)}
      </div>
    </div>
  );
};
