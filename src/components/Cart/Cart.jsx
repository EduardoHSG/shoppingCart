import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import CartItem from "../CartItem/CartItem";

import "./Cart.css";

export default function Cart() {
  const { cartItems } = useContext(AppContext);
  return (
    <section className="cart">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div className="cart-resume">resumo do carrinho</div>
    </section>
  );
}
