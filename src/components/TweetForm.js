import React from "react";
import "./TweetForm.css"

export const TweetForm = () => {
  return (
    <section className="new-tweet" id="new-tweet">
      <div id="new-tweet-error">
        <span>&#9888</span>
        <span id="new-tweet-error-msg"></span>
        <span>&#9888</span>
      </div>
      <form method="POST" action="/tweets/" id="new-tweet-form">
        <label for="new-tweet-text">What are you humming about?</label>
        <textarea name="text" id="new-tweet-text"></textarea>
        <button type="submit" id="new-tweet-submit-btn">
          Tweet
        </button>
        <output
          name="counter"
          className="new-tweet-counter"
          id="counter"
          for="new-tweet-text"
        >
          140
        </output>
      </form>
    </section>
  );
};