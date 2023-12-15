import React from "react";

const Logo = ({ width = "100%" }) => {
  return (
    <div>
      <img src="../logo.png" alt="Logo" style={{ width }} />
    </div>
  );
};

export default Logo;
