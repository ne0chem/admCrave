import React from "react";
import "./ContentArea.css";

const ContentArea = ({ children }) => {
  return (
    <div className="content-area">
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default ContentArea;
