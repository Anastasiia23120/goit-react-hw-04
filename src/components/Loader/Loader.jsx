import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <PuffLoader color="grey" size={96} speedMultiplier={0.75} />
    </div>
  );
};

export default Loader;
