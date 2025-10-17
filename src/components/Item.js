import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  let [inCart, setInCart] = useState(false);
  function handleClick() {
    setInCart((inCart) => !inCart);
  }

  const liClass= inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
