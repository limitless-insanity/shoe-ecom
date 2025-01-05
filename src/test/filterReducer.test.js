import { filterReducer } from "../reducer/filterReducer";

describe("test for filter reducer", () => {
  const initialState = {
    product: [],
    sortBy: null,
    searchBy: null,
    rating: 1,
    category: {
      man: false,
      women: false,
      kid: false,
      latest: false,
    },
  };
  test("should update sortby", () => {
    let action = {
      type: "SORT_BY",
      payload: "HIGH_TO_LOW",
    };
    let state = filterReducer(initialState, action);

    expect(state).toEqual({
      product: [],
      sortBy: "HIGH_TO_LOW",
      searchBy: null,
      rating: 1,
      category: {
        man: false,
        women: false,
        kid: false,
        latest: false,
      },
    });
    action = {
      type: "SORT_BY",
      payload: "LOW_TO_HIGH",
    };
    state = filterReducer(initialState, action);

    expect(state).toEqual({
      product: [],
      sortBy: "LOW_TO_HIGH",
      searchBy: null,
      rating: 1,
      category: {
        man: false,
        women: false,
        kid: false,
        latest: false,
      },
    });
  });

  test("should update filterby", () => {
    const action = {
      type: "FILTER",
      payload: "women",
    };
    const state = filterReducer(initialState, action);

    expect(state).toEqual({
      product: [],
      sortBy: null,
      searchBy: null,
      rating: 1,
      category: {
        man: false,
        women: true,
        kid: false,
        latest: false,
      },
    });
  });
  test("should clear all filter", () => {
    const initialState = {
      product: [],
      sortBy: "LOW_TO_HIGH",
      searchBy: null,
      rating: 4,
      category: {
        man: true,
        women: true,
        kid: true,
        latest: true,
      },
    };

    const action = { type: "CLEAR" };

    const state = filterReducer(initialState, action);

    expect(state).toEqual({
      product: [],
      sortBy: null,
      searchBy: null,
      rating: 1,
      category: {
        man: false,
        women: false,
        kid: false,
        latest: false,
      },
    });
  });
});
