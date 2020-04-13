import React from "react";
import "./Navigation.css"

export const Navigation = () => {
  return (
    <nav class="navbar navbar-fixed-top">
      <span class="navbar-brand">Tweeter</span>
      <div class="navbar-sub">
        <span class="navbar-sub-text" id="new-tweet-toggle">
          <strong>Write</strong> a new tweet
        </span>
        <img
          src="/doublearrow.png"
          alt="double-arrow"
          id="navbar-arrow"
          class="navbar-sub-arrow"
        />
      </div>
    </nav>
  );
};
