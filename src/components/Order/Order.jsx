import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    // console.log(id);
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleRemoveAll = () => {
    setCart([]);
    deleteShoppingCart();
  };

  // console.log(savedCart);

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveAll={handleRemoveAll}>
          {" "}
          <div>
            <Link to="/checkout">
              <button className="checkout-btn">
                Proceed Checkout <FontAwesomeIcon icon={faCreditCard} />
              </button>
            </Link>
          </div>{" "}
        </Cart>
      </div>
    </div>
  );
};

export default Order;
