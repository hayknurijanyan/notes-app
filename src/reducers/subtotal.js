const initialState = 0;

const subtotalReducer = (state = initialState, action) => {
  const subtotal = action.payload;

  switch (action.type) {
    case "UPDATE_SUBTOTAL": {
      return subtotal + 1;
    }
    default:
      return state;
  }
};

export default subtotalReducer;
