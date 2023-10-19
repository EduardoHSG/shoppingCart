import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";

import "./Products.css";
import fetchProducts from "../../api/fetchProducts";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts("iphone").then((resp) => {
      setProducts(resp);
    });
  }, []);

  return (
    <section className="products container">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </section>
  );
}
