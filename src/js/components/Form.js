import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, TextArea } from 'semantic-ui-react';
import { addNote, addNoteFailure, addNoteSuccess } from '../actions/index';

const InitialNoteForm = ({ onClick, value }) => (
  <div className="initial-note-form">
    <input onClick={onClick} value={value} placeholder="Take a note" />
  </div>
);

const mapDispatchToProps = dispatch => ({
  addNote: note =>
    dispatch(addNote(note))
      .payload.then(response => {
        dispatch(addNoteSuccess(response.data));
      })
      .catch(error => {
        dispatch(addNoteFailure(error.data));
      })
});

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      text: '',
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, text } = this.state;
    this.props.addNote({ title, text });
    this.setState({ title: '', text: '' });
  }

  handleOpen(event) {
    event.preventDefault();
    this.setState({ open: true });
  }

  handleClose(event) {
    event.preventDefault();
    this.setState({ open: false });
  }

  render() {
    const { title, text, open } = this.state;
    return open ? (
      <form onSubmit={this.handleSubmit} className="initial-note-form">
        <input
          type="text"
          placeholder="Title"
          className="form-control"
          id="title"
          value={title}
          name="title"
          onChange={this.handleChange}
        />
        <textarea
          type="text"
          id="text"
          name="text"
          placeholder="Take a note"
          value={text}
          onChange={this.handleChange}
          autoFocus
        />
        <div className="action-container">
          <Button color="teal" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button color="teal" type="submit">
            Save
          </Button>
        </div>
        
      </form>
    ) : (
      <InitialNoteForm value={text} onClick={this.handleOpen} />
    );
  }
}
const NoteForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default NoteForm;
