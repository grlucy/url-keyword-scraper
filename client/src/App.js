import { useState } from "react";
import isURL from "validator/lib/isURL";
import "./App.css";
import Input from "./components/input";
import ResultTable from "./components/result-table";

function App() {
  const [url, setUrl] = useState("");
  const [term, setTerm] = useState("");
  const [tableData, setTableData] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = () => {
    // Reset error and table data
    setErrorMsg("");
    setTableData();

    // If user entered invalid URL, prevent fetch
    if (!isURL(url)) {
      setErrorMsg("Error: Not a valid URL!");
      return;
    }

    fetch(
      `http://localhost:3080/scrape?url=${encodeURIComponent(
        url
      )}&term=${encodeURIComponent(term)}`,
      {
        method: "GET",
        mode: "cors",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrorMsg(`Error: ${data.error}`);
        } else {
          setTableData(data);
        }
      });
  };

  return (
    <div className="App">
      <h1>URL Scraper</h1>
      <div className="inputBlock">
        <Input
          label="URL:"
          inputId="urlInput"
          onInputChange={handleUrlChange}
        />
        <Input
          label="Search Term:"
          inputId="termInput"
          onInputChange={handleTermChange}
        />
      </div>
      <br />
      {url && term ? (
        <div className="button" onClick={handleSubmit}>
          Submit
        </div>
      ) : (
        ""
      )}
      {errorMsg ? <p className="error">{errorMsg}</p> : ""}
      {tableData ? (
        <>
          <hr />
          <ResultTable
            tableRows={{
              URL: tableData.url,
              "Search Term": tableData.term,
              "Number of Occurrences": tableData.termNumber,
              Timestamp: new Date(tableData.timestamp).toString(),
            }}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
