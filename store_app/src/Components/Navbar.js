import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../Styles/Navbar.css";
import { useCartCustumHook } from "../Context/AddToCart";
export const Navbar = () => {
  const { total_item } = useCartCustumHook();
  // console.log("total_item", total_item);
  return (
    <div className="nav_container">
      <div className="logo">
        {" "}
        <Link to="./" className="link">
          TeeRex Store
        </Link>
      </div>
      <div className="pages">
        <Link to="./" className="link">
          Porducts
        </Link>
        <Link to="./shoping_cart" className="link ">
          {" "}
          <FaShoppingCart />
          <h1 className="cart">{total_item}</h1>
        </Link>
      </div>
    </div>
  );
};
