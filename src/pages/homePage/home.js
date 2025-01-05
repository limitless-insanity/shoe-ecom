import { ProductCard } from "../../components";
import { mainImg, giftImgOne, giftImgTwo } from "../../assets";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./home.css";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../../hook/scrollToTop";
import { useFilter } from "../../context/filterContext";

export function Home() {
  const [product, setProduct] = useState([]);
  const { dispatch } = useFilter();

  useEffect(() => {
    ScrollToTop();
    (async () => {
      try {
        const response = await axios.get("/api/products");
        setProduct(response.data.products);

        dispatch({ type: "DEFAULT", payload: response.data.products });
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [dispatch]);
  const scrollEl = useRef(null);

  const scroll = (scrollOffset) => {
    scrollEl.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <main className="main-home">
        <div className="head-offer">
          <span className="text-medium text-center">
            Free Shipping + Returns, Free Membership, Exclusive Products
          </span>
          <button className="user-ac-btn join-btn">
            <Link to="/login">Join Us</Link>
          </button>
        </div>
        <div className="home-img card-comp-img">
          <img
            src={mainImg}
            loading="lazy"
            className="responsive-img"
            alt="home page img"
          />
          <div className="card-comp-contant overlap-heading">
            <h2 className="home-img-item-name">NIKE FORCE 1</h2>
            <p className="text-medium">legendary style ready to make moves.</p>
            <Link to="/product">
              <button className="btn btn-outline">Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="popular-section">
          <div>
            <span className="heading-lg">Popular Right Now</span>
          </div>
          <div className="popular-card" ref={scrollEl}>
            <div className="scroll-btn">
              <button
                className="btn-icon scroller"
                onClick={() => scroll(-200)}
              >
                <i className="bi bi-arrow-left"></i>
              </button>

              <button className="btn-icon scroller" onClick={() => scroll(200)}>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
            {product.slice(4, 12).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <div className="gift-section">
            <span className="heading-lg">Gift Ideas</span>
          </div>
          <div className="grid-two">
            <div className="home-img card-comp-img">
              <img
                src={giftImgOne}
                loading="lazy"
                className="responsive-img"
                alt="home page img"
              />
              <div className="card-comp-contant overlap-heading">
                <h2 className="home-img-item-name">NIKE Running</h2>
                <p className="text-medium">
                  legendary style ready to make moves.
                </p>
              </div>
            </div>

            <div className="home-img card-comp-img">
              <img
                src={giftImgTwo}
                loading="lazy"
                className="responsive-img"
                alt="home page img"
              />
              <div className="card-comp-contant overlap-heading">
                <h2 className="home-img-item-name">NIKE Air Max</h2>
                <p className="text-medium">
                  legendary style ready to make moves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
