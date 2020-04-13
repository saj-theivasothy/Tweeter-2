import React from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { TweetForm } from "./components/TweetForm";
import { TweetList } from "./components/TweetList";
import tweets from './initial-tweets.json';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm />
        <section className="tweets-container">
            <TweetList tweets={tweets} />
        </section>
      </main>
    </div>
  );
}

export default App;
