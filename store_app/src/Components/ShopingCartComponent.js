import React, { useState } from "react";
import { useCartCustumHook } from "../Context/AddToCart";
import "../Styles/ShopingCart.css";
import { AmountComponent } from "./AmountComponent";
export const ShopingCartComponent = ({ data }) => {
  const { removerCart } = useCartCustumHook();
  // console.log("data", data);
  const [amount, setAmount] = useState(1);
  const handleDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(amount);
  };
  const handleIncrease = () => {
    if (amount < data.quantity) {
      setAmount(amount + 1);
    } else {
      setAmount(data.quantity);
      alert("OUT OF STOCK");
    }
  };

  let totalPrize = amount * data.price;
  return (
    <div className="cartBox">
      <div className="items">
        <img className="cart_image" src={data.image} alt="error_image" />
        <p className="cart_name">{data.name}</p>
      </div>
      <p>Rs{data.price}</p>

      <AmountComponent
        amount={amount}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />

      {/* <p>{amount}</p> */}
      <p className="prise"> Rs{totalPrize}</p>
      <button
        className="cartBox_delete_button"
        onClick={() => removerCart(data.id, amount)}
      >
        Delete
      </button>
    </div>
  );
};
