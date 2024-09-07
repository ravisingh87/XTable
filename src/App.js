import React, { useState } from "react";
import DataTable from "./DataTable";
import "./App.css";
const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];
const App = () => {
  const [tabelData, setTabelData] = useState([...data]);

  const handleSort = (val) => {
    let newTable = [];
    if (val === "date") {
      newTable = [...tabelData].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    } else if (val === "views") {
      newTable = [...tabelData].sort((a, b) => b.views - a.views);
    }
    setTabelData(newTable);
  };
  return (
    <div>
      <h1>Date and Views Table</h1>
      <DataTable data={tabelData} handleSort={handleSort} />
    </div>
  );
};

export default App;
