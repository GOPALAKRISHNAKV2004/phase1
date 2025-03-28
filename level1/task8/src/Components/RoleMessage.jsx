import React from "react";
import "./RoleMessage.css"; // Import CSS file

const RoleMessage = ({ role }) => {
  const roleStyles = {
    Admin: { color: "red" },
    User: { color: "blue" },
    Guest: { color: "green" },
  };

  return (
    <div className="role-container">
      <h2 className="role-message" style={roleStyles[role] || { color: "black" }}>
        {role === "Admin"
          ? "Welcome, Admin! You have full access."
          : role === "User"
          ? "Hello, User! Limited access granted."
          : "Welcome, Guest! Please log in."}
      </h2>
    </div>
  );
};

export default RoleMessage;
