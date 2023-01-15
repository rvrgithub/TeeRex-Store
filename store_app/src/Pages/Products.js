import React, { useContext } from "react";
import { Card } from "../Components/Card";
import { useCustumHookContext } from "../Context/Store";
import { Search } from "./Search";
import "../Styles/products.css";
import { Filter } from "../Components/Filter";
import { useFiltrCustomHooks } from "../Context/FilterContext";
export const Products = () => {
  // const {name} = useContext(AppContext);
  const { isLoading, storeData } = useCustumHookContext();
  const { filter_data } = useFiltrCustomHooks();
  // console.log("filter data from search",filter_data );
  // console.log("storeData", storeData);
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
            {filter_data?.map((el) => (
              <Card key={el.id} data={el} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
