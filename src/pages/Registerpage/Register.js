import "./Register.css";

import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

const RegisterPage = () => {
  return (
    <div>
      <img
        className="LoginImage_Register"
        src="images/LoginPageBackground.jpg"
        alt="BackGroundImage"
      />
      <div className="WhiteBox_two">
        <img className="LoginPageLogo" src="/images/Logo.png" alt="Logo" />
        <h3>Create your VerumTampore Account</h3>
        <SignupForm />
        <div className="portal_register">
          <button className="continue_register">Next</button>
          <Link to="/login">
            <p>Sign in insted</p>
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

export default RegisterPage;
