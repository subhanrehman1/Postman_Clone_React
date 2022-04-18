import { useState } from "react";
import UrlInput from "./Components/UrlInput";
import Header from "./Components/header";
import ParamInput from "./Components/ParamInput";
import History from "./Components/history";
import ParamsbtnInput from "./Components/ParamsbtnInput";
import HeadersbtnInput from "./Components/HeadersbtnInput";
import ResponseBody from "./Components/ResponseBody";
import BodybtnInput from "./Components/BodybtnInput";
import beautify from "json-beautify";
import "./App.css";
import axios from "axios";
const App = () => {
  const [paramchoice, setParamchoice] = useState("params");
  const [requestType, setRequestType] = useState("get");
  const [url, setUrl] = useState("");
  const [resdata, setResdata] = useState(null);
  const [statuscode, setStatuscode] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [paramkey, setParamKey] = useState(null);
  const [paramValue, setParamValue] = useState(null);
  const [headerkey, setHeaderkey] = useState(null);
  const [headerval, setHeaderval] = useState(null);
  const [header, setHeader] = useState(null);
  const [rawjson, setRawjson] = useState(null);
  const [historydata, setHistorydata] = useState([]);
  const setParamData = () => {
    setError(null);
    const newUrl = `${url}${paramkey}:${paramValue}&`;
    setUrl(newUrl);
  };
  const setHeaderdata = () => {
    setHeader({ ...header, [headerkey]: headerval });
  };
  //console.log(header);
  // console.log(url);
  // console.log(url);
  // console.log(requestType);
  // console.log(statuscode);
  const removeHeader = () => {
    const { [headerkey]: headerval, ...newdata } = header;
    setHeader(newdata);
  };

  // console.log(rawjson);

  const getData = () => {
    setIspending(true);
    var config = {
      method: requestType,
      url: url,
      headers: header,
      data: JSON.parse(rawjson),
    };
    axios(config)
      .then((res) => {
        setResdata(beautify(res.data, null, 2, 100));
        setStatuscode(JSON.stringify(res.status));
        const newhistory = [
          ...historydata,
          `${res.status},${requestType.toUpperCase()}, ${url} `,
        ];
        setHistorydata(newhistory);
        setIspending(false);
      })
      .catch((err) => {
        setError(err.message);
        setStatuscode(
          err.message.substring(err.message.length - 3, err.message.length)
        );
        setResdata(err.message);
        const newhistory = [
          ...historydata,
          `\n${err.message.substring(
            err.message.length - 3,
            err.message.length
          )} \n ${url}`,
        ];
        setHistorydata(newhistory);
        setIspending(false);
      });
  };
  //console.log(rawjson);
  // console.log(resdata);
  const setParam = (e) => {
    // console.log(e.target.value);
    setParamchoice(e.target.value);
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="maindoc">
        <div>
          <History historydata={historydata} />
        </div>
        <div>
          <UrlInput
            changeRequestType={setRequestType}
            changeUrl={setUrl}
            clickbtn={getData}
            pendingStatus={isPending}
            url={url}
          />
          <ParamInput prop={setParam} prop1={requestType} />
          {paramchoice === "params" && (
            <ParamsbtnInput
              setParamKey={setParamKey}
              setParamValue={setParamValue}
              setParamData={setParamData}
            />
          )}
          {paramchoice === "headers" && (
            <HeadersbtnInput
              header={header}
              setHeaderkey={setHeaderkey}
              setHeaderval={setHeaderval}
              setHeaderdata={setHeaderdata}
              removeHeader={removeHeader}
            />
          )}
          {requestType !== "get" && paramchoice === "body" && (
            <BodybtnInput setRawjson={setRawjson} />
          )}
          <ResponseBody
            responseData={resdata}
            responsestatus={statuscode}
            showError={error}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
