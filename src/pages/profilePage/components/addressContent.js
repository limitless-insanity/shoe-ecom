import { useState } from "react";
import { useAddress } from "../../../context";
import { EditAddress } from "./editAddress";

export const AddressContent = () => {
  const { addressState, addressDispatch } = useAddress();

  const [editInfo, setEditInfo] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [type, setType] = useState("EDIT_ADDRESS");

  return (
    <>
      {!editInfo && (
        <div className="address-box">
          {addressState.map((item) => (
            <div key={item.addressId}>
              <p className="text-lg">{item.userName}</p>
              <p>
                {item.area}, {item.state}
              </p>
              <p>{item.city}</p>
              <p>Phone No. - {item.phNumber}</p>
              <button
                className="btn btn-outline btn-small"
                onClick={() => {
                  setSelectedAddress(item);
                  setEditInfo(true);
                }}
              >
                Edit Address
              </button>
              <button
                className="btn btn-small"
                onClick={() =>
                  addressDispatch({
                    type: "REMOVE_ADDRESS",
                    payload: item.addressId,
                  })
                }
              >
                Remove
              </button>
            </div>
          ))}
          <p
            className="add-address"
            onClick={() => {
              setEditInfo(true);
              setType("ADD_ADDRESS");
            }}
          >
            + Add New Address
          </p>
        </div>
      )}
      {editInfo && (
        <EditAddress
          address={selectedAddress}
          type={type}
          setEditInfo={setEditInfo}
        />
      )}
    </>
  );
};
