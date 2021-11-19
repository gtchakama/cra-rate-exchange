import { useEffect, useState } from "react";
import Axios from "axios";

//  dropdown component for React
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function Main() {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("aud");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  // Calling the api when the dependency changes
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  // Calling the convert function to switch currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  //   Filtering array to show only 4 currencies
  let filteredArr = options.filter((arrFiltered) =>
    ["usd", "aud", "gbp", "zar"].includes(arrFiltered)
  );

  return (
    <div>
      <div>
        <input
          className="form-input rounded text-indigo-500 w-full"
          type="number"
          placeholder="Enter the amount"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="flex mt-8 ">
        <div className="flex-1">
          <span className="text-lg text-left">From</span>
          <Dropdown
            className=" p-2 font-medium text-base text-indigo-500"
            options={filteredArr}
            onChange={(e) => {
              setFrom(e.value);
            }}
            value={from}
            placeholder="From"
          />
        </div>

        <div className="flex-1 ">
          <span className="text-lg text-left">To</span>
          <Dropdown
            className=" p-2 text-base font-medium text-indigo-500 "
            options={filteredArr}
            onChange={(e) => {
              setTo(e.value);
            }}
            value={to}
            placeholder="To"
          />
        </div>
      </div>

      <div className="mb-8">
        <button
          className="p-1.5 px-4	rounded-md bg-indigo-900 mt-5"
          onClick={() => {
            convert();
          }}
        >
          Convert
        </button>
        <h2 className="text-lg mt-8  text-yellow-200">Current Rate:</h2>
        <p className="font-sans font-semibold">
          {input + " " + from + " = " + output.toFixed(2) + " " + to}
        </p>
      </div>
    </div>
  );
}
