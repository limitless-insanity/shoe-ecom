import { createContext, useContext, useReducer } from "react";
import { addressReducer } from "../reducer";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const initial = [
    {
      addressId: 0,
      userName: "harshit",
      area: "588 Chandpole",
      city: "udaipur",
      state: "Rajasthan",
      postelCode: "3130023",
      country: "india",
      phNumber: "1234567890",
    },
  ];
  const [addressState, addressDispatch] = useReducer(addressReducer, initial);
  return (
    <AddressContext.Provider value={{ addressState, addressDispatch }}>
      {children}
    </AddressContext.Provider>
  );
};
const useAddress = () => useContext(AddressContext);

export { useAddress, AddressProvider };
