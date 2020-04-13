import React from "react";
import { Tweet } from "./Tweet";

export const TweetList = (props) => {
  const tweets = props.tweets.map((tweet, index) => {
    return (
      <Tweet
        key={index}
        name={tweet.user.name}
        avatar={tweet.user.avatars}
        handle={tweet.user.handle}
        content={tweet.content.text}
        created_at={tweet.created_at}
      />
    );
  });
  return tweets;
}