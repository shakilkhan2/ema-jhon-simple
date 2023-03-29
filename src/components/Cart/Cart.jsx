import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   const cart = props.cart; //option:1
  //   const { cart } = props;  //option:2

  console.log(cart);

  let totalPrice = 0;
  let shipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + shipping + tax;

  return (
    <div className="cart">
      <h4>order summary</h4>
      <p>Selected items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
