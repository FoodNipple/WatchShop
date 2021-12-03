import React from "react";
import { watches } from "../../items";
import useCart from "../../utils/useCart";

import "./Shop.css";

const ShopPage = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <div className="ShopPage">
        <h2>Shop Page</h2>
        <img
          className="ShopBackGround"
          src="images/ShopPageBackground.png"
          alt="BackGroundImage"
        />
      </div>
      <div className="SectionCollection">
        <h3>Collection</h3>
        <div className="ShopPageWatches">
          {watches.map((watch) => (
            <div className="Watch" key={watch.id}>
              <img src={watch.image} alt={watch.name} />
              <h4>{watch.name}</h4>
              <p>{watch.price}</p>
              <button onClick={() => addToCart(watch)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
