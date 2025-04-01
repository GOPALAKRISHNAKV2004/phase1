import React, { useState, useEffect, useCallback } from "react";
import { fetchData } from "../utils/fetchData";

const Reports = () => {
  const [data, setData] = useState([]);

  const getReports = useCallback(async () => {
    const result = await fetchData("https://jsonplaceholder.typicode.com/posts");
    setData(result);
  }, []);

  useEffect(() => {
    getReports();
  }, [getReports]);

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
