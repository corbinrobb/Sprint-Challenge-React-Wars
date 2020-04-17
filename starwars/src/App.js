import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import { Container } from 'reactstrap';
import Character from './components/Character';
import SearchBar from './components/SearchBar';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Container className="card-container">
        {characters.map(character => {
          return <Character key={character.id} character={character} />
        })}
      </Container>
    </div>
  );
}

export default App;
