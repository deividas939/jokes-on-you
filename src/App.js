import './App.css';
import React, {useState, useEffect} from 'react';

const API_URL = 'https://v2.jokeapi.dev/joke/Programming?amount=10';

function App() {
  const [jokes, setJokes] = useState('');

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJokes(data.value.jokes));
  }, [])

  return (
    <div class="box">
      <h1>Jokes On You Generator</h1>
      <p>{jokes}</p>
      <button>Get New Joke!</button>
    </div>
  );
}

export default App;
