import React from "react";
import PropTypes from "prop-types";

const DynamicTable = ({ columns, data }) => {
  return (
    <div className="flex justify-center my-4">
      <div className=" shadow-lg rounded-lg border border-gray-200 bg-blue-50 max-w-full w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-blue-100">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-3 text-center font-semibold text-gray-700"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${rowIndex % 2 === 0 ? "bg-blue-50" : "bg-white"}`}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-4 py-3 text-gray-600 transition transform hover:bg-blue-200 hover:scale-105 duration-150 ease-in-out"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

DynamicTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DynamicTable;
