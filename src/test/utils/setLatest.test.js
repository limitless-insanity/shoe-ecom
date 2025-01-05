import { searchBy } from "../../utils/search";
import { latestProduct } from "../../utils/setLatest";

describe("Test for Latest Item", () => {
  test("Should filter latest item", () => {
    const inital = [
      {
        _id: 1234,
        productName: "Nike Air Max 270",
        image: "nike_air_max_270.url",
        latest: false,
        rating: 3,
      },
      {
        _id: 12345,
        productName: "Nike Air Zoom 38 A.I.R.",
        image: "nike_air_zoom_AIR",
        latest: false,
        rating: 4,
      },
      {
        _id: 1234567,
        productName: "Nike Air Max 90",
        image: "nike_air_max_90",
        rating: 2,
        latest: true,
      },
    ];
    let setLatest = { latest: true };

    let state = latestProduct(inital, setLatest);

    expect(state).toEqual([
      {
        _id: 1234567,
        productName: "Nike Air Max 90",
        image: "nike_air_max_90",
        rating: 2,
        latest: true,
      },
    ]);
  });
});
