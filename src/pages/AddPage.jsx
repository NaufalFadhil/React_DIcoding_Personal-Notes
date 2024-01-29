import React from 'react'
import { addNote } from '../utils/network-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';

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

export default AddPage;