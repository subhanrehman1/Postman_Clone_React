import React from "react";
import "./ParambtnInput.css";
const ParamsbtnInput = ({ setParamKey, setParamValue, setParamData }) => {
  return (
    <div className="ui segment">
      <div class="ui form">
        <div className="paramlabel">
          <label>Params input</label>
        </div>
        <div class="three fields">
          <div class="field">
            <input
              className="ipfield"
              type="text"
              placeholder="Key"
              onChange={(e) => setParamKey(e.target.value)}
            />
          </div>
          <div class="field">
            <input
              className="ipfield"
              type="text"
              placeholder="value"
              onChange={(e) => setParamValue(e.target.value)}
            />
          </div>
          <button className="ui primary button" onClick={setParamData}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParamsbtnInput;
