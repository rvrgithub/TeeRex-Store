import { createContext, useContext, useEffect, useReducer } from "react";
import * as types from "../Reducer/AddToCart/action.type";
import { cartReducer } from "../Reducer/AddToCart/reducer";

const CartContext = createContext();
let localCartData =(localStorage.getItem("localData")) ||[];
// LocalStorage Funtion ....
const getLocalStorageData = () => {

  // console.log("localData",localCartData)
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
// getLocalStorageData()
const initialState = {
  cart: getLocalStorageData(),
// cart:[],
  total_item: "",
  total_amount: "",
  // setShow:false
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Add Cart Fuction ....
  const addToCart = (id, data) => {
    dispatch({ type: types.ADD_TO_CART, payload: { id, data} });
  };

  // Remove Cart Function ....
  const removerCart = (id) => {
    dispatch({ type: types.REMOVE_CART_ITEMS, payload: id });
  };
  //  setLocalData ....
  useEffect(() => {
    dispatch({type:types.CART_TOTAL_ITEM})
    localStorage.setItem("localData", JSON.stringify(state.cart));
  }, [state.cart]); /// every time get new data...

  return (
    <CartContext.Provider value={{ ...state, addToCart, removerCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartCustumHook = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartCustumHook };
