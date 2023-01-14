import React, { useContext } from "react";
import { Card } from "../Components/Card";
import { AppContext, useCustumHookContext } from "../Context/Store";
import { Search } from "./Search";
import "../Styles/products.css";
import { Filter } from "../Components/Filter";
export const Products = () => {
  // const {name} = useContext(AppContext);
  const { isLoading, storeData } = useCustumHookContext();

  console.log("storeData", storeData);
  return (
    <div className="productContainer">
      <div className="leftSideContainer">
        {" "}
        <Filter />
      </div>
      <div className="rightSideContainer">
        <Search />
        {isLoading ? (
          <img
            className="lodingImage"
            src="https://img.freepik.com/premium-vector/loading-icon_167801-435.jpg"
            alt="loading_image"
          />
        ) : (
          <div className="dataContainer">
            {storeData?.map((el) => (
              <Card key={el.id} data={el} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
