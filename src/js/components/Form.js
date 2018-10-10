import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addNote, addNoteFailure, addNoteSuccess } from "../actions/index";
import { Form, Button, TextArea, Icon } from 'semantic-ui-react'
const mapDispatchToProps = dispatch => {
  return {
    addNote: note => dispatch(addNote(note)).payload.then((response) => {
      console.log(response)
      dispatch(addNoteSuccess(response.data));
     }).catch((error )=> {
       dispatch(addNoteFailure(error.data))
     })
  };
};
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title, text } = this.state;
    const id = uuidv1();
    this.props.addNote({ title, text });
    this.setState({ title: "", text: "" });
  }
  render() {
    const { title, text } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}  className="form-group">
          <label htmlFor="text">Title</label>
          <Form.Input type='text' 
            className="form-control"
            id="title"
            value={title}
            name= "title"
            onChange={this.handleChange}/>
          <label htmlFor="text">Details</label>
          <TextArea
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={this.handleChange}
          />
        <Button color="teal" type='submit'>Submit</Button>
      </Form>
    );
  }
}
const NoteForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default NoteForm;