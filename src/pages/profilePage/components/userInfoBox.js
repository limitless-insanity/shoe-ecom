import React, { useState } from "react";
import { AddressContent } from "./addressContent";
import { ProfileContent } from "./profileContent";

export const UserInfoBox = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section className="user-info-box">
      <div className="tabs">
        <p
          onClick={() => setActiveTab("profile")}
          className={`heading-lg ${activeTab === "profile" && "active-tab"}`}
        >
          Profile
        </p>
        <p
          onClick={() => setActiveTab("address")}
          className={`heading-lg ${activeTab === "address" && "active-tab"}`}
        >
          Address
        </p>
      </div>
      <div className="user-info">
        {activeTab === "profile" ? <ProfileContent /> : <AddressContent />}
      </div>
    </section>
  );
};
