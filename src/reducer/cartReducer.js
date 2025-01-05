export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItem: [...state.cartItem, { ...payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItem: state.cartItem.filter((item) => item._id !== payload),
      };
    case "INC_ITEM":
      return {
        ...state,
        cartItem: state.cartItem.map((item) =>
          item._id === payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DIC_ITEM":
      return {
        ...state,
        cartItem: state.cartItem.map((item) =>
          item._id === payload._id
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item
        ),
      };
    case "EMPTY_CART":
      return { ...state, cartItem: [] };
    default:
      return state;
  }
};
