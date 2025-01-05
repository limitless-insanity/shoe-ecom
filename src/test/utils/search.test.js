import { searchBy } from "../../utils/search";

describe("Test to search item", () => {
  test("should find item by search", () => {
    const inital = [
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
    ];
    let searchItem = "max 90";

    let state = searchBy(inital, searchItem);

    expect(state).toEqual([
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
    ]);

    searchItem = "";
    state = searchBy(inital, searchItem);

    expect(state).toEqual(inital);
  });
});
