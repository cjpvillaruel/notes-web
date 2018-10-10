import React, { Component } from "react";
import List from "./List";
import NoteForm from "./Form";
import { Grid, Image, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

class App extends Component { 
  
  render() {
    return (
      <Grid padded>
        <Grid.Column width={4} className="formDiv">
          <h2 >add a new note</h2>
          <NoteForm />
        </Grid.Column>
        <Grid.Column width={12}>
          <List />
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;