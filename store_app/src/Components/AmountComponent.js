import React from "react";
import "../Styles/ShopingCart.css";
export const AmountComponent = ({ amount, handleDecrease, handleIncrease }) => {
  return (
    <div className="amountContainer">
      <button onClick={() => handleDecrease()}>-</button>
      <p>{amount}</p>
      <button onClick={() => handleIncrease()}>+</button>
    </div>
  );
};
