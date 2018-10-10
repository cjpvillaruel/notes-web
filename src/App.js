import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    return fetch("/api/notes")
      .then((response) => response.json())
      .then((notes) =>
        this.setState({notes})
      )
  }
  render() {
    return (
      <div className="notes">
        <h1>Notes</h1>
        {this.state.notes.map(note =>
          <div key={note.id} class='note'>
            <h1>{note.title}</h1>
            <p>{note.text}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
