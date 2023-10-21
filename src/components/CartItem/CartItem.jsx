import React from "react";
import { BsCartDashFill } from "react-icons/bs";
import "./CartItem.css";

export default function Cartitem() {
  return (
    <section className="cart-item">
      <img src="" alt="imagem do produto" className="cart-item-image" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">Título do produto</h3>
        <h3 className="cart-item-price">R$123</h3>
        <button type="button" className="button__remove-item">
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}
