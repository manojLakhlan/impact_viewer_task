import React from "react";
import DynamicTable from "./Components/DynamicTable";
import "./index.css";

const App = () => {
  const columns1 = [
    { label: "Type", key: "type" },
    { label: "Total", key: "total" },
  ];

  const data1 = [
    { type: "Books", total: 120 },
    { type: "Pens", total: 50 },
    { type: "Notebooks", total: 200 },
  ];

  const columns2 = [
    { label: "Category", key: "category" },
    { label: "Count", key: "count" },
  ];

  const data2 = [
    { category: "Fruits", count: 30 },
    { category: "Vegetables", count: 50 },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div>
        <h2 className="text-2xl text-center font-bold mb-4">Inventory Table</h2>
        <DynamicTable columns={columns1} data={data1} />
      </div>
      <div>
        <h2 className="text-2xl text-center font-bold mb-4">
          Categories Table
        </h2>
        <DynamicTable columns={columns2} data={data2} />
      </div>
    </div>
  );
};

export default App;
