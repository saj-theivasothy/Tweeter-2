import React from "react";
import "./Navigation.css"

export const Navigation = () => {
  return (
    <nav className="navbar navbar-fixed-top">
      <span className="navbar-brand">Tweeter</span>
      <div className="navbar-sub">
        <span className="navbar-sub-text" id="new-tweet-toggle">
          <strong>Write</strong> a new tweet
        </span>
        <img
          src="/doublearrow.png"
          alt="double-arrow"
          id="navbar-arrow"
          className="navbar-sub-arrow"
        />
      </div>
    </nav>
  );
};
