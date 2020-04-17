import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import { Container } from 'reactstrap';
import Character from './components/Character';
import SearchBar from './components/SearchBar';
import styled from 'styled-components';

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .card {
    width: 30%;
    margin: 1%;
    text-align: left;
    line-height: 2;
    padding: 1%;

    div {
      display: flex;
      flex-direction: column;
    }

    div > * {
      margin: 1% 0;
    }
  }
`

const App = () => {
  const [ characters, setCharacters ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => console.log(err));
  }, []);

  const filteredCharacters = () => {
    return characters.filter(character => {
      const values = [character.name, character.species, character.status, character.gender, character.origin.name]

      return values.reduce((acc, value) => {
        if (value.toLowerCase().includes(searchTerm.toLowerCase())) acc = true;
        return acc;
      }, false)
    })
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CardContainer>
        {filteredCharacters().map(character => {
          return <Character key={character.id} character={character} />
        })}
      </CardContainer>
    </div>
  );
}

export default App;
