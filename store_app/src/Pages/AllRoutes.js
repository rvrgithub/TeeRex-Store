import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "./Products";
import { ShopingCart } from "./ShopingCart";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/shoping_cart" element={<ShopingCart />} />
    </Routes>
  );
};
