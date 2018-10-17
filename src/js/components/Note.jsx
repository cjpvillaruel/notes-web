import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react';
import { deleteNote, deleteNoteSuccess, deleteNoteFailure } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  deleteCurrentNote: note =>
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
    this.state = {
      note: props.note,
      index: props.index
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { deleteCurrentNote } = this.props;
    const { note } = this.state;
    deleteCurrentNote(note);
  }

  render() {
    const { note } = this.state;
    const { _id, title, text } = note;
    return (
      <Card color="teal" raised id={_id}>
        <Card.Content>
          <Card.Header>
            {title}
            <Icon
              circular
              onClick={this.handleDelete}
              inverted
              className="delete-button"
              color="grey"
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

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  }),
  index: PropTypes.number,
  deleteCurrentNote: PropTypes.func.isRequired
};


const Note1 = connect(
  null,
  mapDispatchToProps
)(Note);
export default Note1;
