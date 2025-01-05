export const latestProduct = (products, category) => {
  if (category.latest) {
    return products.filter((item) => item.latest);
  }
  return products;
};
