import React from "react";

import { useSelector } from "react-redux";
import useCart from "../../utils/useCart";

import styles from "./ShopCart.module.scss";

function ShopCart() {
  const addedItems = useSelector((state) => state.items);
  const { removeFromCart } = useCart();

  return (
    <div className={styles.cart}>
      <h2>In your cart you have:</h2>
      <div className={styles.items}>
        {addedItems.map((item, i) => {
          return (
            <div className={styles.item__info_with_image} key={`${item}${i}`}>
              <img
                src={item.image}
                alt="WatchImage"
                className={styles.shopCart_image}
              />
              <div className={styles.item__info}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(item)}>
                  Remove from cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.final__confirm}>
        <button>
          <span>Buy </span>
        </button>
        <p>your total Price is:</p>
      </div>
    </div>
  );
}

export default ShopCart;
