import { filterByCategory } from "../../utils/setCategory";

describe("Test set category", () => {
  test("should return filter category", () => {
    const inital = [
      {
        _id: 1234,
        productName: "Nike Air Max 270",
        image: "nike_air_max_270.url",
        categoryName: "women",
        rating: 3,
      },
      {
        _id: 12345,
        productName: "Nike Air Zoom 38 A.I.R.",
        image: "nike_air_zoom_AIR",
        categoryName: "man",
        rating: 4,
      },
      {
        _id: 1234567,
        productName: "Nike Air Max 90",
        image: "nike_air_max_90",
        categoryName: "kids",
        rating: 2,
      },
      {
        _id: 123456788,
        productName: "Jorder",
        image: "jorder.url",
        categoryName: "man",
        rating: 2,
      },
    ];

    let activeCategory = {
      man: true,
      kids: true,
      women: false,
      latest: false,
    };

    let state = filterByCategory(inital, activeCategory);

    expect(state).toEqual([
      {
        _id: 1234567,
        productName: "Nike Air Max 90",
        image: "nike_air_max_90",
        categoryName: "kids",
        rating: 2,
      },
      {
        _id: 12345,
        productName: "Nike Air Zoom 38 A.I.R.",
        image: "nike_air_zoom_AIR",
        categoryName: "man",
        rating: 4,
      },
      {
        _id: 123456788,
        productName: "Jorder",
        image: "jorder.url",
        categoryName: "man",
        rating: 2,
      },
    ]);
    activeCategory = {
      man: false,
      kids: false,
      women: false,
      latest: false,
    };

    state = filterByCategory(inital, activeCategory);

    expect(state).toEqual(inital);
  });
});
