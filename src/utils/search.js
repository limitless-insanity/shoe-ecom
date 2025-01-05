export const searchBy = (product, input) => {
  if (input !== null && input !== "") {
    const result = product.filter((item) =>
      item.productName.toLowerCase().includes(input.toLowerCase())
    );
    if (result === []) return product;
    return result;
  } else {
    return product;
  }
};
