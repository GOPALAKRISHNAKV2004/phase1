import React, { useState, useEffect, useCallback } from "react";
import { fetchData } from "../utils/fetchData";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  // Fetch data from API or local storage
  const fetchStats = useCallback(async () => {
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts");
    setStats({ totalPosts: data.length, recentPost: data[0]?.title });
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      {stats ? (
        <div className="stats">
          <p><strong>Total Posts:</strong> {stats.totalPosts}</p>
          <p><strong>Latest Post:</strong> {stats.recentPost}</p>
        </div>
      ) : (
        <p>Loading statistics...</p>
      )}
    </div>
  );
};

export default React.memo(Dashboard);
