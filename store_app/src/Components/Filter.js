import React from "react";
import { useFiltrCustomHooks } from "../Context/FilterContext";
import "../Styles/filter.css";
export const Filter = () => {
    const {filter_data ,sortValue} = useFiltrCustomHooks()
  return ( 
    <div className="filterComponent">
      <div className="flex">
        <label>Color</label>

        <div>
          <input type={"checkbox"} value="" id="blue" onChange={sortValue} />
          <lable for="blue">Blue</lable>
        </div>

        <div>
          <input type={"checkbox"} placeholder="Red"   onChange={sortValue}/>
          <lable for="red">Red</lable>
        </div>
        <div>
          {" "}
          <input type={"checkbox"} placeholder="Green"   onChange={sortValue}/>
          <lable for="green">Green</lable>
        </div>
      </div>

      {/* price section .... */}
      <label>Price</label>
      <div className="flex">
        <div>
          <input type={"checkbox"} id="price_1" value=""  onChange={sortValue} />
          <lable for="price_1">0-Rs 250</lable>
        </div>

        <div>
          {" "}
          <input type={"checkbox"} id="price_2" />
          <lable for="price_2">Rs 251-450</lable>
        </div>
        <div>
          <input type={"checkbox"} id="price_3" />
          <lable for="price_3">Rs 450</lable>
        </div>
      </div>
      <div className="flex">
        <label>Gender</label>
        <div>
          <input type={"checkbox"} id="women" value=""  onChange={sortValue} />
          <lable for="women">Women</lable>
        </div>
        <div>
          <input type={"checkbox"} placeholder="" id="men"  onChange={sortValue} />
          <lable for="men">Men</lable>
        </div>
      </div>

      <div className="flex"></div>
      <label>Type</label>

      <div>
        {" "}
        <input type={"checkbox"} id="Polo" value="" placeholder=""   onChange={sortValue}/>
        <lable for="polo">Polo</lable>
      </div>
      <div>
        <input type={"checkbox"} placeholder="" id="Hoodie"  onChange={sortValue} />
        <lable for="Hoodie">Hoodie</lable>
      </div>
      <div>
        {" "}
        <input type={"checkbox"} placeholder="" id="Basic"   onChange={sortValue}/>
        <lable for="Basic">Basic</lable>
      </div>
    </div>
  );
};
