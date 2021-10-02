const initialState = {
    products: [],
  };
  
  function favoriteReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TO_FAVORITE":
        const product = action.payload;
        const newState = {
          ...state,
          products: [
            ...state.products,
            product,
          ],
        };
        return newState;
      default:
        return state;
    }
  }
  export default favoriteReducer;