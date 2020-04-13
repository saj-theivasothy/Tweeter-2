import React from "react";
import "./Tweet.css"

export const Tweet = (props) => {
  return(
    <article className="tweet">
          <header>
            <img src={props.avatar} alt="user avatar" />
            <p>{props.name}</p>
            <span>{props.handle}</span>
          </header>
          <section>
            <p>{props.content}</p>  
          </section>
          <footer>
            <span id="day-counter">{props.created_at}</span>
            <span id="symbol">
              <span>⚑</span>
              <span>↹</span>
              <span>❤</span>
            </span>
          </footer>
        </article>
  )
}
