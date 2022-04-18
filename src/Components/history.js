import React from "react";
import "./history.css";
const history = ({ historydata }) => {
  return (
    <div className="ui segment">
      <h1 className="historytitle">History</h1>
      {historydata.map((value) => {
        return <div className="history-content">{value}</div>;
      })}
    </div>
  );
};

export default history;
