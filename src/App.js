import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      characters: [],
    }
  }

  componentDidMount(){
    debugger
    axios.get('/api/characters')
      .then((response)=>{
        debugger
        this.setState({
          characters: response.data
        })
      })
  }
  render() {
    debugger
    const charactersCards = this.state.characters.map((character)=>{
        return <h1>{character.name}</h1>
    })
    return (
      <div className="App">
        Characters
        {charactersCards}
      </div>
    );
  }
}

export default App;
