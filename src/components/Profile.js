import React from "react";
import "./Profile.css"

export const Profile = () => {
  return (
    <header className="header header-fixed-top">
      <div className="header-avatar">
        <img src="/profile-hex.png" alt="user-avatar" />
      </div>
      <div className="header-name">
        <h2>Your Name</h2>
      </div>
    </header>
  );
};
