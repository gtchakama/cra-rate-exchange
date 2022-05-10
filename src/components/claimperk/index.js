import React from "react";
import { TabGroup } from "@statikly/funk";

const ClaimPerk = () => {
  return (
    <div className="p-12 border m-12  flex flex-col justify-center items-center">
      <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
        <TabGroup.TabList>
          <TabGroup.Tab
            index={0}
            className="h-12 px-12 transition-colors duration-150"
            activeClassName="border-b"
            inactiveClassName="text-black"
          >
            Perk Description
          </TabGroup.Tab>
          <TabGroup.Tab
            index={1}
            className="h-12 px-12 transition-colors duration-150"
            activeClassName="border-b"
            inactiveClassName="text-black"
          >
            Picture
          </TabGroup.Tab>
          <TabGroup.Tab
            index={2}
            className="h-12 px-12 transition-colors duration-150"
            activeClassName="border-b"
            inactiveClassName="text-black"
          >
            Pick up Locations
          </TabGroup.Tab>
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className="py-12 transition-all transform h-1/2"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <div className="relative overflow-x-auto flex justify-center ">
            <table className="w-2/5  text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Name of the Deal
                  </th>
                  <td className="px-6 py-4">Rice</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Category
                  </th>
                  <td className="px-6 py-4">Food</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Price
                  </th>
                  <td className="px-6 py-4">N15,000</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Deal Location
                  </th>
                  <td className="px-6 py-4">Shoprite</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Description
                  </th>
                  <td className="px-6 py-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Mollitia animi quia repudiandae nobis voluptate dolores
                    nulla, asperiores fugiat facilis. Ut, quia. At enim repellat
                    accusantium porro! Aut impedit ipsum quia!
                  </td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Expiration Date :
                  </th>
                  <td className="px-6 py-4">14/04/2022</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Terms & Conditions
                  </th>
                  <td className="px-6 py-4">Not Refundable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={1}
          className="p-12 transition-all transform h-1/2 flex flex-col"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <img
            src="https://picsum.photos/500/300?grayscale"
            alt="perk"
            srcset=""
            className="rounded"
          />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={2}
          className="py-12 transition-all transform h-96 text-left px-20 w-1/2"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <div className="text-left w-full">
            <p className="flex text-left justify-start items-center my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Location Name
            </p>

            <p className="flex text-left justify-start items-center my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Location Name
            </p>

            <p className="flex text-left justify-start items-center my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Location Name
            </p>

            <p className="flex text-left justify-start items-center my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Location Name
            </p>

            <p className="flex text-left justify-start items-center my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Location Name
            </p>
          </div>
        </TabGroup.TabPanel>
      </TabGroup>
      <button className="h-12 px-12 bg-indigo-500 text-white">
        Make Payment
      </button>
    </div>
  );
};

export default ClaimPerk;
