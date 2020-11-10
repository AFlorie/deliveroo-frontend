import React from "react";

const header = ({ logo }) => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default header;
