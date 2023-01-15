import React from "react";
import { useFiltrCustomHooks } from "../Context/FilterContext";
import "../Styles/filter.css";
export const Filter = () => {
  const { filter_data, sortValue } = useFiltrCustomHooks();
  const {
    filters: { color },
    checkBoxFilter,
  } = useFiltrCustomHooks();
  //   const checkBoxFilter = (e) => {
  //     const { name, checked, value } = e.target;
  //     console.log("name", name, value, checked);
  //     if(checked === true){
  // const filterData = filter_data.filter((el)=>el.color===value)
  //   console.log("filterDataformCheckbox" , filterData)
  //     }
  //     else{
  //   console.log("filllll",filter_data)

  //     }

  //   };
  // console.log("filllll",filter_data)

  const colorSection = [{ name: "Blue" }, { name: "Green" }, { name: "Red" }];
  const genderSection = [{ name: "Men" }, { name: "Women" }];
  const priceSection = [
    { name: "0-Rs 250" },
    { name: "Rs 251-450" },
    { name: "Rs 450" },
  ];
  const typeSection = [{ name: "Hoodie" }, { name: "Polo" }, { name: "Basic" }];
  return (
    <div className="filterComponent">
      <div className="flex">
        <label>Color</label>
        {colorSection?.map((el,id) => (
          <div key={id}>
            <input
              type={"checkbox"}
              name={"text"}
              value={el.name}
              checked={el.name?.isChecked}
              id="blue"
              onChange={checkBoxFilter}
            />
            <lable for="blue">{el.name}</lable>
          </div>
        ))}
      </div>

      {/* price section .... */}

      <div className="flex">
        <label>Price</label>
        {priceSection?.map((el,id) => (
          <div key={id}>
            <input
              type={"checkbox"}
              name={"text"}
              value={el.name}
              checked={el.name?.isChecked}
              id="blue"
              onChange={checkBoxFilter}
            />
            <lable for="blue">{el.name}</lable>
          </div>
        ))}
      </div>

      {/* Gender section .... */}

      <div className="flex">
        <label>Gender</label>
        {genderSection?.map((el,id) => (
          <div key={id}>
            <input
              type={"checkbox"}
              name={"text"}
              value={el.name}
              checked={el.name?.isChecked}
              id="blue"
              onChange={checkBoxFilter}
            />
            <lable for="blue">{el.name}</lable>
          </div>
        ))}
      </div>

      {/* Type section .... */}

      <div className="flex">
        <label>Gender</label>
        {typeSection?.map((el,id) => (
          <div key={id}>
            <input
              type={"checkbox"}
              name={"text"}
              value={el.name}
              checked={el.name?.isChecked}
              id="blue"
              onChange={checkBoxFilter}
            />
            <lable for="blue">{el.name}</lable>
          </div>
        ))}
      </div>
    </div>
  );
};
