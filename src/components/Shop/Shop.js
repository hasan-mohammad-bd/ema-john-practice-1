import "./Shop.css";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";

const Shop = () => {
  //mistake-2: write the use state in product section instead in shop section.
  const [products, setProducts] = useState([]);

  //mistake-3: forgot how to fetch form local file.
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Products product={product} key={product.id}></Products>
        ))}
      </div>
      <Cart></Cart>
    </div>
  );
};

export default Shop;
