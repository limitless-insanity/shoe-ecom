import { initialCartState } from "../context/cartContext";
import { cartReducer } from "../reducer/cartReducer";
describe("testing cart reducer", () => {
  test("should add to cart when value added", () => {
    let action = {
      type: "ADD_TO_CART",
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
    let state = cartReducer(initialCartState, action);
    expect(state).toEqual({
      cartItem: [
        {
          _id: 1234,
          productName: "Nike Air Max 270",
          price: 8999,
          image: "nike_air_max_270.url",
          categoryName: "man",
          discount: 30,
          latest: true,
          rating: 3,
          quantity: 1,
        },
      ],
    });
  });
  test("should remove item from cart", () => {
    const initial = {
      cartItem: [
        {
          _id: 1234,
          productName: "Nike Air Max 270",
          price: 8999,
          image: "nike_air_max_270.url",
          categoryName: "man",
          discount: 30,
          latest: true,
          rating: 3,
          quantity: 1,
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
          quantity: 1,
        },
        {
          _id: 1234567,
          productName: "Nike Air Max 90",
          price: 7000,
          image: "nike_air_max_90",
          categoryName: "man",
          discount: 40,
          latest: true,
          rating: 2,
          quantity: 1,
        },
      ],
    };

    let action = {
      type: "REMOVE_FROM_CART",
      payload: 1234567,
    };

    const state = cartReducer(initial, action);

    expect(state).toEqual({
      cartItem: [
        {
          _id: 1234,
          productName: "Nike Air Max 270",
          price: 8999,
          image: "nike_air_max_270.url",
          categoryName: "man",
          discount: 30,
          latest: true,
          rating: 3,
          quantity: 1,
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
          quantity: 1,
        },
      ],
    });
  });
  test("should increase quantity", () => {
    const initial = {
      cartItem: [
        {
          _id: 12345,
          productName: "Nike Air Zoom 38 A.I.R.",
          price: 9100,
          image: "nike_air_zoom_AIR",
          categoryName: "man",
          discount: 20,
          latest: false,
          rating: 4,
          quantity: 1,
        },
        {
          _id: 1234,
          productName: "Nike Air Max 270",
          price: 8999,
          image: "nike_air_max_270.url",
          categoryName: "man",
          discount: 30,
          latest: true,
          rating: 3,
          quantity: 1,
        },
      ],
    };

    const action = {
      type: "INC_ITEM",
      payload: {
        _id: 1234,
        productName: "Nike Air Max 270",
        price: 8999,
        image: "nike_air_max_270.url",
        categoryName: "man",
        discount: 30,
        latest: true,
        rating: 3,
        quantity: 1,
      },
    };
    const state = cartReducer(initial, action);

    expect(state).toEqual({
      cartItem: [
        {
          _id: 12345,
          productName: "Nike Air Zoom 38 A.I.R.",
          price: 9100,
          image: "nike_air_zoom_AIR",
          categoryName: "man",
          discount: 20,
          latest: false,
          rating: 4,
          quantity: 1,
        },
        {
          _id: 1234,
          productName: "Nike Air Max 270",
          price: 8999,
          image: "nike_air_max_270.url",
          categoryName: "man",
          discount: 30,
          latest: true,
          rating: 3,
          quantity: 2,
        },
      ],
    });
  });
  test("should dicrease quantity", () => {
    const initial = {
      cartItem: [
        {
          _id: 12345,
          productName: "Nike Air Zoom 38 A.I.R.",
          price: 9100,
          image: "nike_air_zoom_AIR",
          categoryName: "man",
          discount: 20,
          latest: false,
          rating: 4,
          quantity: 3,
        },
        {
          _id: 1234,
          productName: "Nike Air Max 270",
          price: 8999,
          image: "nike_air_max_270.url",
          categoryName: "man",
          discount: 30,
          latest: true,
          rating: 3,
          quantity: 3,
        },
      ],
    };
    const action = {
      type: "DIC_ITEM",
      payload: {
        _id: 1234,
        productName: "Nike Air Max 270",
        price: 8999,
        image: "nike_air_max_270.url",
        categoryName: "man",
        discount: 30,
        latest: true,
        rating: 3,
        quantity: 3,
      },
    };
    const state = cartReducer(initial, action);

    expect(state).toEqual({
      cartItem: [
        {
          _id: 12345,
          productName: "Nike Air Zoom 38 A.I.R.",
          price: 9100,
          image: "nike_air_zoom_AIR",
          categoryName: "man",
          discount: 20,
          latest: false,
          rating: 4,
          quantity: 3,
        },
        {
          _id: 1234,
          productName: "Nike Air Max 270",
          price: 8999,
          image: "nike_air_max_270.url",
          categoryName: "man",
          discount: 30,
          latest: true,
          rating: 3,
          quantity: 2,
        },
      ],
    });
  });
});
