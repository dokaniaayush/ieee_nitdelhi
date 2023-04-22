import React from "react";

const Sponsor = () => {
  return (
    <div id="sponsors">
      <div
        id="sponsor_text"
        className="fs-3 fw-bold"
        style={{ marginBottom: "50px", color: "#13699b" }}
      >
        Sponsors
      </div>
      <div id="sponsor_list">
        <img
          style={{ width: "100px", height: "100px", margin: "15px" }}
          src="https://cdn.onlinewebfonts.com/svg/img_44641.png"
        />
        <img
          style={{ width: "100px", height: "100px", margin: "15px" }}
          src="https://cdn.onlinewebfonts.com/svg/img_44641.png"
        />
        <img
          style={{ width: "100px", height: "100px", margin: "15px" }}
          src="https://cdn.onlinewebfonts.com/svg/img_44641.png"
        />
      </div>
    </div>
  );
};

export default Sponsor;