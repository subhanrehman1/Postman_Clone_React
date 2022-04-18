import React from "react";
import "./Urlinput.css";
const UrlInput = ({
  changeRequestType,
  changeUrl,
  clickbtn,
  pendingStatus,
  url,
}) => {
  return (
    <div className="input-content ui segment">
      <div class="ui form elem">
        <div class="field">
          <select onChange={(e) => changeRequestType(e.target.value)}>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="delete">DELETE</option>
            <option value="put">PUT</option>
          </select>
        </div>
      </div>
      <div className="ui input focus elem">
        <input
          type="text"
          className="ipurl"
          placeholder="Enter request url"
          value={url}
          onChange={(e) => changeUrl(`${e.target.value}`)}
          onKeyDown={(e) => {
            if (e.key === "Enter") changeUrl(`${url}?`);
          }}
        ></input>
      </div>
      {pendingStatus ? (
        <button class="ui primary button elem" onClick={clickbtn}>
          Sending...
        </button>
      ) : (
        <button class="ui primary button elem" onClick={clickbtn}>
          Send
        </button>
      )}
    </div>
  );
};

export default UrlInput;
