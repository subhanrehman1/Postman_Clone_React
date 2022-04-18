import React from "react";
import "./ResponseBody.css";
const ResponseBody = ({ responseData, responsestatus, error }) => {
  return (
    <div className="ui segment">
      <div className="resp-labels">
        <label>Body</label>
        <label className="label2">Status code:{responsestatus}</label>
      </div>
      <textarea
        className="response-text"
        value={error ? error : responseData}
        readOnly
      ></textarea>
    </div>
  );
};

export default ResponseBody;
