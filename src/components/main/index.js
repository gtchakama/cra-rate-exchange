import React from "react";

export default function Main() {
  return (
    <div>
      <h1>Main Comp</h1>
      <div className="left">
        <h3>Amount</h3>
        <input
          className="form-input rounded text-pink-500"
          type="text"
          placeholder="Enter the amount"
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
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          To
        </label>
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>

      <div className="result">
        <button>Convert</button>
        <h2>Converted Amount:</h2>
        <p>12345</p>
      </div>
    </div>
  );
}
