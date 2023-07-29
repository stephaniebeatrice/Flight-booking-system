import React from "react";

export const Pop = ({ text, okText, cancelText, yesHandler, cancelHandler, doNotShowCancel }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <p>{text}</p>
        <div className="popup-buttons">
          <button className="btn btn-success" onClick={yesHandler}>
            {okText}
          </button>
          {!doNotShowCancel && (
            <button className="btn btn-danger" onClick={cancelHandler}>
              {cancelText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
