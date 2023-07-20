import React from "react";
import "./styles.css"; // Import the CSS file for the custom button styles

export const CustomButton = ({ onClick, children }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};
