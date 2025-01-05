import { wishlistReducer } from "../reducer/wishlistReducer";

describe("test wishlist reducer", () => {
  test("should add item to wishlist", () => {
    const initial = {
      wishlist: [],
    };
    const action = {
      type: "ADD_TO_WISHLIST",
      payload: {
        _id: 1234,
        productName: "Nike Air Max 270",
        price: 8999,
        image: "nike_air_max_270.url",
        categoryName: "man",
        discount: 30,
        latest: true,
        rating: 3,
      },
    };
    const state = wishlistReducer(initial, action);

    expect(state).toEqual({
      wishlist: [
        {
          _id: 1234,
          productName: "Nike Air Max 270",
          price: 8999,
          image: "nike_air_max_270.url",
          categoryName: "man",
          discount: 30,
          latest: true,
          rating: 3,
        },
      ],
    });
  });
  test("should remove item from wishlist", () => {
    const initial = {
      wishlist: [
        {
          _id: 1234,
          productName: "Nike Air Max 270",
          price: 8999,
          image: "nike_air_max_270.url",
          categoryName: "man",
          discount: 30,
          latest: true,
          rating: 3,
        },
        {
          _id: 12345,
          productName: "Nike Air Zoom 38 A.I.R.",
          price: 9100,
          image: "nike_air_zoom_AIR",
          categoryName: "man",
          discount: 20,
          latest: false,
          rating: 4,
        },
      ],
    };
    const action = {
      type: "REMOVE_FROM_WISHLIST",
      payload: 12345,
    };
    const state = wishlistReducer(initial, action);

    expect(state).toEqual({
      wishlist: [
        {
          _id: 1234,
          productName: "Nike Air Max 270",
          price: 8999,
          image: "nike_air_max_270.url",
          categoryName: "man",
          discount: 30,
          latest: true,
          rating: 3,
        },
      ],
    });
  });
});
