import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import Note from './Note';
import { fetchNotes, fetchNotesSuccess, fetchNotesFailure } from '../actions/index';

const mapStateToProps = state => ({ notes: state.notes.notes });

const mapDispatchToProps = dispatch => ({
  fetchAllNotes: () => {
    dispatch(fetchNotes())
      .payload.then(response => {
        dispatch(fetchNotesSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchNotesFailure(error.data));
      });
  }
});

class ConnectedList extends Component {
  componentWillMount() {
    const { fetchAllNotes } = this.props;
    fetchAllNotes();
  }

  render() {
    const { notes } = this.props;
    return (
      <Card.Group itemsPerRow={3}>
        {notes.map((note, i) => (
          <Note note={note} key={i} index={i} />
        ))}
      </Card.Group>
    );
  }
}
const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
export default List;
