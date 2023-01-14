import React, { useState } from "react";
import { useFiltrCustomHooks } from "../Context/FilterContext";

export const Search = () => {
  const {filters:{text} ,updateFilterValue}=useFiltrCustomHooks();
  const { filter_data } = useFiltrCustomHooks();
  console.log("filter data",filter_data );
  console.log("test",text)
  return (
    <div>
    <form onSubmit={(e)=>e.preventDefault()}>
      <input
        type="search"
        placeholder="Search ...."
        name="text"
        value={text}
        onChange={updateFilterValue}
      />
      </form>
    </div>
  );
};
