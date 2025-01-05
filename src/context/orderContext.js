import { createContext, useContext, useState } from "react";

const orderContext = createContext();

const OrderProvider = ({ children }) => {
  const initail = {
    address: {},
    order: [],
  };
  const [order, setOrder] = useState(initail);
  return (
    <orderContext.Provider value={{ order, setOrder }}>
      {children}
    </orderContext.Provider>
  );
};
const useOrder = () => useContext(orderContext);

export { useOrder, OrderProvider };
