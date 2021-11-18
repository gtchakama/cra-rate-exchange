import { useEffect, useState } from "react";
import Axios from "axios";
import { HiSwitchHorizontal } from "react-icons/hi";

export default function Main() {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }
  return (
    <div>
      <h1>Main Comp</h1>
      <div className="left">
        <h3>Amount</h3>
        <input
          className="form-input rounded text-pink-500"
          type="text"
          placeholder="Enter the amount"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          From
        </label>
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className="uppercase font-medium font-mono mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-yellow-400"
        >
          {options.map((option) => (
            <option
              className="uppercase font-medium text-yellow-600"
              onChange={(e) => {
                setFrom(e.value);
              }}
              value={from}
              key={option}
            >
              {" "}
              {option}{" "}
            </option>
          ))}
        </select>
      </div>
      <h1>{from}</h1>

      <div className="switch">
        <HiSwitchHorizontal
          size="30px"
          onClick={() => {
            flip();
          }}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700 "
        >
          To
        </label>
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className=" uppercase  mt-1 font-mono block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-yellow-400"
        >
          {options.map((option) => (
            <option
              className="uppercase text-yellow-600 font-bold"
              onChange={(e) => {
                setTo(e.value);
              }}
              value={to}
              key={option}
            >
              {" "}
              {option}{" "}
            </option>
          ))}
        </select>
      </div>

      <div className="result">
        <button
          onClick={() => {
            convert();
          }}
        >
          Convert
        </button>
        <h2>Converted Amount:</h2>
        <p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>
      </div>
    </div>
  );
}
