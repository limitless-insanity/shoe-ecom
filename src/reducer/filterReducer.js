export const filterReducer = (state, { type, payload }) => {
  const {
    category,
    category: { man, women, kid, latest },
  } = state;

  switch (type) {
    case "DEFAULT":
      return { ...state, product: [...payload] };
    case "SORT_BY":
      return { ...state, sortBy: payload };
    case "MAN":
      return { ...state, category: { ...state.category, man: !man } };
    case "WOMEN":
      return { ...state, category: { ...state.category, women: !women } };
    case "KID":
      return { ...state, category: { ...state.category, kid: !kid } };
    case "LATEST":
      return { ...state, category: { ...state.category, latest: !latest } };
    case "RATING":
      return { ...state, rating: parseInt(payload) };
    case "FILTER":
      return {
        ...state,
        category: {
          ...state.category,
          man: payload === "man",
          women: payload === "women",
          kid: payload === "kid",
          latest: payload === "latest",
        },
      };
    case "SEARCH":
      return {
        ...state,
        searchBy: payload,
      };
    case "CLEAR":
      for (let cates in category) {
        category[cates] = false;
      }
      return { ...state, sortBy: null, rating: 1 };
    default:
      return state;
  }
};
