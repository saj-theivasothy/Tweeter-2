import React from "react";
import "./Tweet.css"

export const Tweet = () => {
  return(
    <article class="tweet">
          <header>
            <img src="https://i.imgur.com/73hZDYK.png" alt="user avatar" />
            <p>Newton</p>
            <span>@SirIsaac</span>
          </header>
          <section>
            <p>
              If I have seen further it is by standing on the shoulders of giants
            </p>  
          </section>
          <footer>
            <span id="day-counter">1454 days ago</span>
            <span id="symbol">
              <span>⚑</span>
              <span>↹</span>
              <span>❤</span>
            </span>
          </footer>
        </article>
  )
}
