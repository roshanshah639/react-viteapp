import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <h1>{children}</h1>
    </div>
  );
};

export default Container;
