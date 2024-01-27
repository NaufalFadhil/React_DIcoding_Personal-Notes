import React from 'react';
import { getAllNotes } from '../utils/local-data';
import Header from './Header';
import Main from './Main';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
    }

    console.log(this.state.notes);

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id)
      }
    })
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      console.log(new Date().toISOString());
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className='note-app'>
        <Header />
        <Main notes={this.state.notes} addNote={this.onAddNoteHandler} deleteNote={this.onDeleteHandler} />
      </div>
    )
  }
}

export default NoteApp;