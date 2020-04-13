import React from "react";
import "./Profile.css"

export const Profile = () => {
  return (
    <header class="header header-fixed-top">
      <div class="header-avatar">
        <img src="/images/profile-hex.png" alt="user-avatar" />
      </div>
      <div class="header-name">
        <h2>Your Name</h2>
      </div>
    </header>
  );
};
