import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <img
        className="LoginImage"
        src="images/LoginPageBackground.jpg"
        alt="BackGroundImage"
      />
      <div className="WhiteBox">
        <img className="LoginPageLogo" src="/images/Logo.png" alt="Logo" />
        <h3>Log in</h3>
        <Link to="/shop">
          <h4>Continue to Shop</h4>
        </Link>
        <input className="email" type="text" name="email" placeholder="Email" />
        <input
          className="password"
          type="text"
          name="password"
          placeholder="Password"
        />
        <button className="continue">Next</button>
        <div className="portal">
          <h4>New to Verum Tampore?</h4>
          <Link to="/register">
            <p>Click here</p>
          </Link>
        </div>
        <div className="conditions">
          <p>Help</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
