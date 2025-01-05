const findItem = (data, id) => {
  return data.find((data) => data._id === id);
};

export { findItem };
