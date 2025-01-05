export const addressReducer = (state, { type, payload }) => {
  switch (type) {
    case "EDIT_ADDRESS":
      const index = state.findIndex(
        (item) => item.addressId === payload.addressId
      );
      state[index] = payload;
      return state;
    case "ADD_ADDRESS":
      return [...state, payload];
    case "REMOVE_ADDRESS":
      state = state.filter((item) => item.addressId !== payload);
      return state;
    default:
      return state;
  }
};
