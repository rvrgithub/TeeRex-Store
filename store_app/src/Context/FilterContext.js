import { createContext, useContext, useEffect, useReducer } from "react";
import { useCustumHookContext } from "./Store";
import * as types from "../Reducer/FilterReducer/action.type";
import { filterReducer } from "../Reducer/FilterReducer/reducer";
const FilterContext = createContext();
const initalState = {
  filter_data: [],
  all_data: [],
  allStoreData: [],
  filters: {
    text: "",
    color:"",
  },
};
export const FilterContextProvider = ({ children }) => {
  const { storeData } = useCustumHookContext();
  const [state, dispatch] = useReducer(filterReducer, initalState);
  //   const sortValue = () => {
  //     dispatch({ type: types.GET_SORT_VALUE });
  //   };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({
      type: types.UPDATE_FILTER_VALUE,
      payload: { name, value },
    });
  };

  // checkbox filter ...
  const checkBoxFilter=(event) =>{
    const { name, checked, value } = event.target;
    console.log("name", name, value, checked);
    return dispatch({
      type:types.UPDATE_CHECK_VALUE, payload:{name,value,checked},
    })
    
  }
  useEffect(() => {
    dispatch({ type: types.FITLER_STORE_DATA, payload: storeData });
  }, [storeData, state.filters]);

  // loadding.......
  useEffect(() => {
    dispatch({ type: types.LOAD_FILTER_DATA, payload: storeData });
  }, [storeData]);
  return (
    <FilterContext.Provider value={{ ...state, updateFilterValue,checkBoxFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFiltrCustomHooks = () => {
  return useContext(FilterContext);
};
