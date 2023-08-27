import React from "react";
import Group from "../assets/Group location.png";
import Countries from "../scenes/Countries";

function Country() {
  return (
    <div>
      <div>
        <Countries />
        <img src={Group} alt="location" />
      </div>
    </div>
  );
}

export default Country;
