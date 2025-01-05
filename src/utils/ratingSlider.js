export const ratingSlider = (products, rating) => {
  return products.filter((item) => Number(item.rating) >= Number(rating));
};
