import React from "react";
import { Link } from "react-router-dom";

import useCart from "../../utils/useCart";

import CartSvg from "../../assets/svg/CartSvg";

import styles from "./Header.module.scss";

function Header() {
  const { toggleCart, removeFromCart } = useCart();

  return (
    <nav className={styles.header}>
      <div className={styles.header__links}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <li>About</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className={styles.header__main}>
        <img src="/images/Logo.png" alt="Logo" />
        <h1>VERUM TEMPORE</h1>
      </div>

      <div className={styles.header__menu}>
        <div className={styles.header__menu__cart}>
          <CartSvg onClick={() => toggleCart()} />
        </div>

        <div className={styles.header__menu__links}>
          <Link to="/login">
            <p>Login</p>
          </Link>
          <Link to="/register">
            <p>Register</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
