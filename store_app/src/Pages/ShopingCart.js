import React from "react";
import { ShopingCartComponent } from "../Components/ShopingCartComponent";
import { useCartCustumHook } from "../Context/AddToCart";
import "../Styles/ShopingCart.css";

export const ShopingCart = () => {
  const { cart } = useCartCustumHook();
  // console.log("cart", cart);
  return (
    <div className="cartContainer">
      <div className="cartBox">
        <p>ITEMS</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>SUBTOTLA</p>
        <p>Delete</p>
      </div>
      {cart?.map((el) => (
        <ShopingCartComponent data={el} key={el.id} />
      ))}

      
    </div>
  );
};
