function Payslip() {
  return (
    <div className="">
      <header className="  pt-12 px-12 pd-4">
        <div className=" ">
          <h1 className=" text-[#4F4F4F] text-2xl font-bold">
            Review payslips for April
          </h1>

          <div className="flex justify-between items-center text-lg">
            <p className="flex grow w-1/2 text-[#4F4F4F]">
              Review and adjust payslips for employees. Add bonus, comission, or
              make payroll deductions
            </p>
            <div>
              <button
                className="border border-indigo-300 text-indigo-300 py-4 px-8 rounded tracking-wide mr-4 font-display focus:outline-none focus:shadow-outline  
                                     "
              >
                Back
              </button>

              <button
                className="bg-indigo-300 text-gray-100 py-4 px-8  mr-4 rounded tracking-wide font-display focus:outline-none focus:shadow-outline hover:bg-indigo-300
                                     "
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
        <div className="py-4 ">
          <div className="mb-3 w-96">
            <div className="input-group relative flex  items-stretch w-full mb-4 border border-gray-500 focus:ring-1 rounded">
              <span className="btn inline-block px-2 py-2.5 text-indigo-500 font-medium text-xs leading-tight uppercase   transition duration-150 ease-in-out items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </span>
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-white rounded transition ease-in-out m-0 focus:border-white focus:outline-none border-transparent focus:border-transparent focus:ring-0"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main comps */}
      <div className="flex w-full py-4 px-12 justify-between">
        <div className="space-y-6 py-12 px-6 border w-2/4 mr-8">
          <a href="/" className=" text-lg mx-4">
            {" "}
            <div className=" border p-4 rounded hover:bg-gray-100 flex justify-between items-center">
              <div>
                <h1>User Name</h1>
                <p className=" font-light  ">Product Manager</p>
              </div>
              <div className=" font-light  ">
                {" "}
                <span>Ready</span>
              </div>
            </div>
          </a>

          <a href="/" className=" text-lg mx-4">
            {" "}
            <div className=" border p-4 rounded hover:bg-gray-100 flex justify-between items-center">
              <div>
                <h1>User Name</h1>
                <p className=" font-light  ">Product Manager</p>
              </div>
              <div className=" font-light  ">
                {" "}
                <span>Ready</span>
              </div>
            </div>
          </a>

          <a href="/" className=" text-lg mx-4">
            {" "}
            <div className=" border p-4 rounded hover:bg-gray-100 flex justify-between items-center">
              <div>
                <h1>User Name</h1>
                <p className=" font-light  ">Product Manager</p>
              </div>
              <div className=" font-light  ">
                {" "}
                <span>Ready</span>
              </div>
            </div>
          </a>

          <a href="/" className=" text-lg mx-4">
            {" "}
            <div className=" border p-4 rounded hover:bg-gray-100 flex justify-between items-center">
              <div>
                <h1>User Name</h1>
                <p className=" font-light  ">Product Manager</p>
              </div>
              <div className=" font-light  ">
                {" "}
                <span>Ready</span>
              </div>
            </div>
          </a>

          <a href="/" className=" text-lg mx-4">
            {" "}
            <div className=" border p-4 rounded hover:bg-gray-100 flex justify-between items-center">
              <div>
                <h1>User Name</h1>
                <p className=" font-light  ">Product Manager</p>
              </div>
              <div className=" font-light  ">
                {" "}
                <span>Ready</span>
              </div>
            </div>
          </a>

          <a href="/" className=" text-lg mx-4">
            {" "}
            <div className=" border p-4 rounded hover:bg-gray-100 flex justify-between items-center">
              <div>
                <h1>User Name</h1>
                <p className=" font-light  ">Product Manager</p>
              </div>
              <div className=" font-light  ">
                {" "}
                <span>Ready</span>
              </div>
            </div>
          </a>

          <a href="/" className=" text-lg mx-4">
            {" "}
            <div className=" border p-4 rounded hover:bg-gray-100 flex justify-between items-center">
              <div>
                <h1>User Name</h1>
                <p className=" font-light  ">Product Manager</p>
              </div>
              <div className=" font-light  ">
                {" "}
                <span>Ready</span>
              </div>
            </div>
          </a>
        </div>

        <form className="space-y-6 mx-9    border w-3/4">
          <div className="  text-lg ">
            <div className="border-b w-full pb-4 ">
              {" "}
              <div className="  mt-4 flex justify-between px-12">
                <div className=" ">
                  <h1>User Name</h1>
                  <p className="font-light">Product Manager</p>
                </div>
                <button className="p-4 bg-indigo-600 text-white rounded">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="px-12">
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-lg font-light text-gray-500 dark:text-gray-300"
              >
                Working days
              </label>
              <input
                type="email"
                id="email"
                className="   border border-gray-300 text-gray-500 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="12"
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="grossSalary"
                className="block mb-2 text-lg font-light text-gray-500 dark:text-gray-300"
              >
                Gross salary
              </label>
              <input
                id="grossSalary"
                className="   border border-gray-300 text-gray-500 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value="N34,2490,96"
              />
            </div>
            <div className="mb-6">
              <label
                for="grossSalary"
                className="block mb-2 text-lg font-light text-gray-500 dark:text-gray-300"
              >
                Net Salary
              </label>
              <input
                id="NetSalary"
                className="   border border-gray-300 text-gray-500 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value="N34,2490,96"
              />
            </div>
            <h1>Deductions</h1>
            <div className="mb-6">
              <label
                for="Paye"
                className="block mb-2 text-lg font-light text-gray-500 dark:text-gray-300"
              >
                Paye
              </label>
              <input
                id="Paye"
                className="   border border-gray-300 text-gray-500 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value="N34,2490,96"
              />
            </div>

            <div className="mb-6">
              <label
                for="Deductions"
                className="block mb-2 text-lg font-light text-gray-500 dark:text-gray-300"
              >
                Deductions
              </label>
              <input
                id="Deductions"
                className="   border border-gray-300 text-gray-500 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value="N34,2490,96"
              />
            </div>
            <div className="mb-6 flex justify-between w-full">
              <div className="mr-2 w-1/2">
                <label
                  for="Deductions"
                  className="block mb-2 text-lg font-light text-gray-500 dark:text-gray-300"
                >
                  Staff loan
                </label>
                <input
                  id="Deductions"
                  className="   border border-gray-300 text-gray-500 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value="N490,96"
                />
              </div>
              <div className="w-1/2">
                <label
                  for="Deductions"
                  className="block mb-2 text-lg font-light text-gray-500 dark:text-gray-300"
                >
                  Others
                </label>
                <input
                  id="Deductions"
                  className="   border border-gray-300 text-gray-500 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value="N490,96"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payslip;
