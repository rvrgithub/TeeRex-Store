import * as types from "./action.type";
export const filterReducer = (state, action) => {
  switch (action.type) {
    case types.LOAD_FILTER_DATA:
      return {
        ...state,
        filter_data: [...action.payload],
        all_data: [...action.payload],
      };

    case types.UPDATE_FILTER_VALUE:
      const { name, value} = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case types.FITLER_STORE_DATA:
      let { all_data } = state;
      let temp_filter_data = [...all_data];
      // console.log("storeData reducer" ,temp_filter_data)
      const { text } = state.filters;
      if (text) {
        temp_filter_data = temp_filter_data.filter((el) => {
          return (
            el.name.toLowerCase().includes(text) ||
            el.type.toLowerCase().includes(text) ||
            el.color.toLowerCase().includes(text) ||
            el.price.toString().includes(text)
          );
        });
      }
      // console.log("storeData upate", temp_filter_data);
      return {
        ...state,
        filter_data: temp_filter_data,
      };


    default:
      return state;
  }
};
