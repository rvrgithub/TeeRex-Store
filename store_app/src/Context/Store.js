import { createContext, useContext, useEffect, useReducer } from "react";
// import { getStoreData } from "../Reducer/action";
import { reducer } from "../Reducer/DataReducer/reducer";
import * as types from "../Reducer/DataReducer/action.type";

const initialState = {
  isLoading: false,
  isError: false,
  storeData: [],
  
};
const url =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getStoreData = () => {
    dispatch({ type: types.GET_DATA_REQUEST });
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch({ type: types.GET_DATA_SUCCESS, payload: data }))
      .catch((err) =>
        dispatch({
          type: types.GET_DATA_FAILURE,
          payload: console.log("error", err),
        })
      );
  };


  useEffect(() => {
    getStoreData();
  }, []);

// console.log("storeData",storeData)
  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  );
};

// create custum hooks....
const useCustumHookContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useCustumHookContext };
