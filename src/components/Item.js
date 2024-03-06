import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  const handleClick = (e) => {
    setIsInCart(!isInCart)
}
  return (
    <li className={isInCart ? "in-cart" : ""} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={isInCart ? "remove" : "add"}>{isInCart ? "Remove" : "Add to Cart"}</button>
    </li> 
  );
}

export default Item;
