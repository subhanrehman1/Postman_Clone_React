import React from "react";
import "./HeadersbtnInput.css";
const HeadersbtnInput = ({
  header,
  setHeaderkey,
  setHeaderval,
  setHeaderdata,
  removeHeader,
}) => {
  return (
    <div className="ui segment">
      <div class="ui form">
        <div className="headerlabel">
          <label>Headers input</label>
        </div>
        <div class="three fields">
          <div class="field">
            <input
              className="ipfield"
              type="text"
              placeholder="Key"
              onChange={(e) => setHeaderkey(e.target.value)}
            />
          </div>
          <div class="field">
            <input
              className="ipfield"
              type="text"
              placeholder="value"
              onChange={(e) => setHeaderval(e.target.value)}
            />
          </div>
          <button className="ui primary button" onClick={setHeaderdata}>
            Add
          </button>
          <button className="ui button" onClick={removeHeader}>
            Remove
          </button>
        </div>
      </div>
      <div style={{ color: "#0284c7" }}>{header && JSON.stringify(header)}</div>
    </div>
  );
};

export default HeadersbtnInput;
