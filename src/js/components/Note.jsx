import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react'
import { deleteNote, deleteNoteSuccess, deleteNoteFailure } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  deleteNote: note =>
    dispatch(deleteNote(note))
      .payload.then(() => {
        dispatch(deleteNoteSuccess(note));
      })
      .catch(error => {
        dispatch(deleteNoteFailure(error.data));
      })
});

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = props.note;
    this.state.index = props.index;
  }

  handleDelete() {
    const { deleteNote } = this.props;
    deleteNote(this.state);
  }

  render() {
    const { _id, title, text } = this.state;
    return (
      <Card color="orange" raised id={_id}>
        <Card.Content>
          <Card.Header>
            {title}
            <Icon
              circular
              onClick={this.handleDelete(this)}
              inverted
              color="orange"
              name="close"
              size="tiny"
            />
          </Card.Header>
          <Card.Description>{text}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

// Note.propTypes = {
//   note: PropTypes.shape({
//     title: PropTypes.string,
//     text: PropTypes.string,
//     _id: PropTypes.string
//   }),
//   index: PropTypes.number,
// }

const Note1 = connect(
  null,
  mapDispatchToProps
)(Note);
export default Note1;
