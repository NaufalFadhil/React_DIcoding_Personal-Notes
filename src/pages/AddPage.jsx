import React from 'react'
import { addNote } from '../utils/network-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }

  return(
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}

AddPage.propTypes = {
  onAddNoteHandler: PropTypes.func,
}

export default AddPage;