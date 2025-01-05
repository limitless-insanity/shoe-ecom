import { useState } from "react";
import { useAddress } from "../../../context";
import { v4 as uuid } from "uuid";

export const EditAddress = ({ address, type, setEditInfo }) => {
  const { addressDispatch } = useAddress();

  const addressItem =
    Object.keys(address).length === 0
      ? {
          addressId: uuid(),
          userName: "",
          area: "",
          city: "",
          state: "",
          postelCode: "",
          country: "",
          phNumber: "",
        }
      : address;

  const [addressValue, setAddressValue] = useState(addressItem);

  const addressHandler = () => {
    addressDispatch({ type: type, payload: addressValue });
    setTimeout(() => {
      setEditInfo(false);
    }, 300);
  };
  return (
    <div className="edit-address input-box">
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) =>
          setAddressValue((address) => {
            return { ...address, userName: e.target.value };
          })
        }
        value={addressValue.userName}
      />
      <input
        type="text"
        placeholder="Enter House No. Area"
        onChange={(e) =>
          setAddressValue((address) => {
            return { ...address, area: e.target.value };
          })
        }
        value={addressValue.area}
      />
      <input
        type="text"
        placeholder="Enter City"
        onChange={(e) =>
          setAddressValue((address) => {
            return { ...address, city: e.target.value };
          })
        }
        value={addressValue.city}
      />
      <input
        type="text"
        placeholder="Enter Postel Code"
        onChange={(e) =>
          setAddressValue((address) => {
            return { ...address, postelCode: e.target.value };
          })
        }
        value={addressValue.postelCode}
      />
      <input
        type="text"
        placeholder="Enter State"
        onChange={(e) =>
          setAddressValue((address) => {
            return { ...address, state: e.target.value };
          })
        }
        value={addressValue.state}
      />
      <input
        type="text"
        placeholder="Enter Country"
        onChange={(e) =>
          setAddressValue((address) => {
            return { ...address, country: e.target.value };
          })
        }
        value={addressValue.country}
      />
      <input
        type="text"
        placeholder="Enter Mobile Number"
        onChange={(e) =>
          setAddressValue((address) => {
            return { ...address, phNumber: e.target.value };
          })
        }
        value={addressValue.phNumber}
      />
      <button className="btn btn-outline btn-small" onClick={addressHandler}>
        Save Address
      </button>
    </div>
  );
};
