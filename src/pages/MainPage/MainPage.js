import React from "react";
import { useSelector } from "react-redux";
import ShopCart from "../../components/ShopCart/ShopCart";
import { watches } from "../../items";
import useCart from "../../utils/useCart";
import "./MainPage.css";

const MainPage = () => {
  const cartState = useSelector((state) => state.isCartOpened);
  const { addToCart } = useCart();

  return (
    <div>
      <div className="background">
        <p>Time Is Limitless</p>
        <img
          className="backgroundimage"
          src="images/BackGroundImage.jpg"
          alt="BackGroundImage"
        />
      </div>

      <div className="collection">
        <h2>Best Offer</h2>
        <div className="watchesCollection">
          {watches.map((watch) => {
            return (
              <div className="watches" key={watch.id}>
                <img className="watch" src={watch.image} alt="img" />
                <p>{watch.info.name}</p>
                <code>{watch.price}</code>
                <button onClick={() => addToCart(watch)}>ADD TO CART</button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="shop_page">{cartState && <ShopCart />}</div>
    </div>
  );
};

export default MainPage;
