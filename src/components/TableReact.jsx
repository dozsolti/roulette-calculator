import React, { useEffect, useMemo, useState } from "react";
import { useBets } from '../contexts/Bet'

/* const products = [
  {
    id: 1,
    Category: "Electronics",
    Company: "Apple",
    Product: "iPhone 13",
    Description: "The latest iPhone with advanced features",
    Price: 999,
    CustomDetails: [
      {
        Date: "2023-09-05",
        Customer: "John Doe",
        Quantity: 2,
        TotalAmount: 1998,
      },
      {
        Date: "2023-09-04",
        Customer: "Jane Smith",
        Quantity: 1,
        TotalAmount: 999,
      },
    ],
  },
  {
    id: 2,
    Category: "Clothing",
    Company: "Nike",
    Product: "Running Shoes",
    Description: "High-quality running shoes for athletes",
    Price: 89,
    CustomDetails: [
      {
        Date: "2023-09-05",
        Customer: "Alice Johnson",
        Quantity: 3,
        TotalAmount: 267,
      },
      {
        Date: "2023-09-03",
        Customer: "Bob Brown",
        Quantity: 2,
        TotalAmount: 178,
      },
    ],
  },
  {
    id: 3,
    Category: "Books",
    Company: "Penguin Books",
    Product: "The Great Gatsby",
    Description: "Classic novel by F. Scott Fitzgerald",
    Price: 12,
    CustomDetails: [
      {
        Date: "2023-09-02",
        Customer: "Ella Williams",
        Quantity: 5,
        TotalAmount: 60,
      },
    ],
  },
  {
    id: 4,
    Category: "Home Appliances",
    Company: "Samsung",
    Product: "Smart Refrigerator",
    Description: "Refrigerator with smart features and spacious design",
    Price: 14,
    CustomDetails: [
      {
        Date: "2023-09-05",
        Customer: "David Wilson",
        Quantity: 1,
        TotalAmount: 14,
      },
    ],
  },
]; */

const TableReact = () => {
  const { numberList, betsData } = useBets()

  const [activeColumn, setActiveColumn] = useState(["name"]);
  const [sortingColumn, setSortingColumn] = useState(["name"]);
  const sortByColumn = (column) => {
    if (sortingColumn?.includes(column)) {
      const sortData = numberList
        .slice()
        .sort((a, b) =>
          +b[column].toString() - a[column]
        );
      setSortingData(sortData);
      setSortingColumn([]);
    } else {
      const sortData = numberList
        .slice()
        .sort((a, b) =>
          +a[column].toString() - b[column]
        );
      setSortingData(sortData);
      setSortingColumn([`${column}`]);
    }
    setActiveColumn([`${column}`]);
  };
  const [sortingData, setSortingData] = useState(numberList);

  useEffect(() => {
    setSortingData(numberList);
  }, [numberList]);

  const renderTable = () => {
    return (<div className="flex w-full px-4 mt-2 overflow-x-scroll min-w-min fl-c md:overflow-auto max-w-7xl 2xl:max-w-none">
      <table className="w-full overflow-scroll text-left border-separate table-auto md:overflow-auto font-inter border-spacing-y-0 borer ">
        <thead className="w-full text-base font-semibold text-white rounded-lg bg-green-950">
          <tr className="md:grid md:grid-cols-[1fr_1fr]">
            <th className="px-3 py-3 font-bold sm:text-base whitespace-nowrap group">
              <div className="flex items-center">
                <svg
                  className={`w-4 h-4 cursor-pointer ${activeColumn?.includes("name")
                    ? "text-blue-500"
                    : "text-[#BCBDBE] group-hover:text-blue-300 rotate-180"
                    } ${sortingColumn?.includes("name")
                      ? "rotate-180"
                      : "rotate-0"
                    }
       `}
                  onClick={() => sortByColumn("name")}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <span
                  className="pl-1 cursor-pointer"
                  onClick={() => sortByColumn("name")}
                >
                  Number
                </span>
              </div>
            </th>
            <th className="flex items-center justify-end px-3 py-3 font-bold sm:text-base whitespace-nowrap group">
              <svg
                className={`w-4 h-4 cursor-pointer  ${sortingColumn?.includes("profit")
                  ? "rotate-180"
                  : "rotate-0"
                  } ${activeColumn?.includes("profit")
                    ? "text-blue-500"
                    : "text-[#BCBDBE] group-hover:text-blue-300 rotate-180"
                  }`}
                onClick={() => sortByColumn("profit")}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <span
                className="pl-1 cursor-pointer"
                onClick={() => sortByColumn("profit")}
              >
                Profit
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="md:grid md:grid-cols-[1fr_1fr_1fr]">
          {sortingData?.map((data, index) => (
            <tr key={index} className={`border ${data.profit < 0 ? 'bg-red-800' : data.profit > 0 ? 'bg-green-800' : 'bg-transparent'}`}>
              <td className={`px-3 py-1 text-base font-normal whitespace-nowrap  ${data.profit < 0 ? 'bg-red-800' : data.profit > 0 ? 'bg-green-800' : 'bg-transparent'}`}>
                {data.name}
              </td>
              <td className={`px-4 text-base font-normal ${data.profit < 0 ? 'bg-red-800' : data.profit > 0 ? 'bg-green-800' : 'bg-transparent'}`}>
                {"$" + data.profit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>)
  }

  const renderEmpty = () => {
    return <i>Place a bet</i>
  }
  return (
    <div className="flex flex-col justify-center mb-6">
      <div className="flex flex-col items-center max-w-4xl px-2">
        {betsData.length > 0 ?
          renderTable() : renderEmpty()}

      </div>
    </div>
  );
};
export default TableReact;
