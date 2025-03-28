import React, { useState } from "react";
import "./FilteredList.css";

const sampleData = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Brown" },
  { id: 4, name: "David Williams" },
  { id: 5, name: "Emma Davis" }
];

function FilteredList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter names based on search input
  const filteredNames = sampleData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="filter-container">
      <h2>Search & Filter List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="name-list">
        {filteredNames.length > 0 ? (
          filteredNames.map((item) => (
            <li key={item.id} className="name-item">
              {item.name}
            </li>
          ))
        ) : (
          <li className="no-results">No results found</li>
        )}
      </ul>
    </div>
  );
}

export default FilteredList;
