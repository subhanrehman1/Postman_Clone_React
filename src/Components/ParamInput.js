import React from "react";
import "./ParamInput.css";
const ParamInput = ({ prop, prop1 }) => {
  return (
    <div className="parambtns ui segment">
      <button className="ui primary basic button" value="params" onClick={prop}>
        Params
      </button>
      <button
        className="ui primary basic button"
        value="headers"
        onClick={prop}
      >
        Headers
      </button>
      {prop1 !== "get" && (
        <button className="ui primary basic button" value="body" onClick={prop}>
          Body
        </button>
      )}
    </div>
  );
};

export default ParamInput;
