import { ratingSlider } from "../../utils/ratingSlider";

describe("Test to filter by rating", () => {
  test("should filter by rate", () => {
    const inital = [
      {
        _id: 1234,
        productName: "Nike Air Max 270",
        image: "nike_air_max_270.url",
        rating: 3,
      },
      {
        _id: 12345,
        productName: "Nike Air Zoom 38 A.I.R.",
        image: "nike_air_zoom_AIR",
        rating: 4,
      },
      {
        _id: 1234567,
        productName: "Nike Air Max 90",
        image: "nike_air_max_90",
        rating: 2,
      },
    ];
    // more than or equal
    const byRate = 3;
    const state = ratingSlider(inital, byRate);

    expect(state).toEqual([
      {
        _id: 1234,
        productName: "Nike Air Max 270",
        image: "nike_air_max_270.url",
        rating: 3,
      },
      {
        _id: 12345,
        productName: "Nike Air Zoom 38 A.I.R.",
        image: "nike_air_zoom_AIR",
        rating: 4,
      },
    ]);
  });
});
