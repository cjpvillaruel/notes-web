import React, { Component } from 'react';
import 'isomorphic-fetch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  render() {
    console.log(notes);
    return (
      <div className="notes">
        <h1>Notesss</h1>
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
