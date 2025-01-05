import "./footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="grid-three">
        <div className="flex-colum side-footer">
          <h5>FIND STORE</h5>
          <h6>BECOME A MEMBER</h6>
          <h6>SIGNUP FOR A EMAIL</h6>
          <h6>STUDENT DISCOUNT</h6>
        </div>
        <div className="flex-colum side-footer">
          <h5>GET HELP</h5>
          <p className="gray-text">Order Status</p>
          <p className="gray-text">Delivery</p>
          <p className="gray-text">Payment Option</p>
        </div>
        <div className="flex-colum side-footer">
          <h5>ABOUT US</h5>
          <span>
            <a href="https://github.com/harshitpaliwal95">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/harshit-paliwal-8302951b0/">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://twitter.com/harshit__hp">
              <i className="bi bi-twitter"></i>
            </a>
          </span>
        </div>
      </div>
      <div className="flex-row side-footer">
        <i className="bi bi-geo-alt-fill"></i>
        <p className="gray-text">
          INDIA © 2022 SHOE ZONE, Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
