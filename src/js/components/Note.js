import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { Button, Card, Icon } from 'semantic-ui-react'
import { deleteNote, deleteNoteSuccess, deleteNoteFailure } from '../actions/index'


const mapDispatchToProps = dispatch => {
  return {
    deleteNote: note => dispatch(deleteNote(note)).payload.then((response) => {
      dispatch(deleteNoteSuccess(note));
     }).catch((error )=> {
       dispatch(deleteNoteFailure(error.data))
     })
  };
};

// const Note = ({ note }) => {
class Note extends Component {
  // const { _id, title, text } = note

  constructor(props) {
    super(props);
    this.state = props.note
    this.state.index = props.index
  }
  handleDelete(e){
    // event.preventDefault();
    this.props.deleteNote(this.state);
  }

  render() {
    const { _id, title, text } = this.state;
    return (
      <Card color='orange' raised id={_id} >
        <Card.Content>
          <Card.Header>
            {title}
            <Icon circular onClick={this.handleDelete.bind(this)} inverted color='orange' name='close' size='tiny' />
          </Card.Header>
          <Card.Description>
            {text}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  };
}

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    _id: PropTypes.string
  })
}

const Note1 = connect(null, mapDispatchToProps)(Note);
export default Note1;
