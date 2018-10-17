import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import List from './List';
import NoteForm from './Form';

const App = () => (
  <Grid padded>
    <Grid.Column width={16} className="formDiv">
      <NoteForm />
    </Grid.Column>
    <Grid.Column width={16}>
      <List />
    </Grid.Column>
  </Grid>
);

export default App;
