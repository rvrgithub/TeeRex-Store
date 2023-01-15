import * as types from "./action.type";
export const cartReducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case types.ADD_TO_CART:
      let { id, data} = payload;
      let cartData;
      cartData = {
        id: id,
        quantity: data.quantity,
        name: data.name,
        price: data.price,
        image: data.imageURL,
        setShow:true
      };
      return {
        ...state,
        cart: [...state.cart, cartData]
      };
    case types.REMOVE_CART_ITEMS:
      let removeCart = state.cart.filter((el) => el.id !== action.payload);
      return {
        ...state,
        cart: removeCart,
      };
    case types.CART_TOTAL_ITEM:
      let updateItemValue = state.cart.reduce((inti, cur) => {
        let { quantity } = cur;
        inti += quantity;
        return inti;
      }, 0);
      return {
        ...state,
        total_item: updateItemValue,
      };
    default:
      return state;
  }
};
