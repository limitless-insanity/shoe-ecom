export const sortData = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH")
    return products.sort((a, b) => a.price - b.price);
  if (sortBy === "HIGH_TO_LOW")
    return products.sort((a, b) => b.price - a.price);
  if (sortBy === "LOW_TO_HIGH_RATE") {
    return products.sort((a, b) => a.rating - b.rating);
  }
  if (sortBy === "HIGH_TO_LOW_RATE")
    return products.sort((a, b) => b.rating - a.rating);
  return products;
};
