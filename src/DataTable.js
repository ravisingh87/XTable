import React from "react";

const DataTable = ({ data, handleSort }) => {
  return (
    <div>
      {data && (
        <>
          <button onClick={() => handleSort("date")}>Sort by Date</button>
          <button onClick={() => handleSort("views")}>Sort by Views</button>
          <table>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
            <tbody>
              {data.map((item, idx) => (
                <tr key={`${item.date}_${item.views}_${idx}`}>
                  <td>{item.date}</td>
                  <td>{item.views}</td>
                  <td>{item.article}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default DataTable;
