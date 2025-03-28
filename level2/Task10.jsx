import React, { useState } from "react";
import "./task10.css"; // Import CSS file for styling

function Task10() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    console.log("Form Submitted:", formData); // Logs form data to console
    alert(`Form Submitted! Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <div className="task10-container">
      <h2>Form Submission</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Task10;
