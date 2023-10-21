import React from "react";
import Cartitem from "../CartItem/CartItem";

import "./Cart.css";

export default function Cart() {
  return (
    <section className="cart">
      <div className="cart-items">
        <Cartitem />
      </div>
      <div className="cart-resume">resumo do carrinho</div>
    </section>
  );
}
