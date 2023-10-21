import React, { useEffect, useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";

import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

export default function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts("iphone").then((resp) => {
      setProducts(resp);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <section className="products container">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </section>
  );
}
