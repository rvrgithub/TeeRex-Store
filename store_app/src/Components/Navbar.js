import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../Styles/Navbar.css";
export const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="logo">TeeRex Store</div>
      <div className="pages">
        <Link to="./" className="link">
          Porducts
        </Link>
        <Link to="./shoping_cart" className="link ">
          {" "}
          <FaShoppingCart />
          <h1 className="cart">3</h1>
        </Link>
        
      </div>
    </div>
  );
};
