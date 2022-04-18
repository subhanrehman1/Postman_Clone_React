import React from "react";
import "./BodybtnInput.css";
const BodybtnInput = ({ setRawjson }) => {
  return (
    <div className="ui segment">
      <textarea
        placeholder="Raw json data"
        className="bodybtnip"
        onChange={(e) => setRawjson(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") setRawjson(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default BodybtnInput;
