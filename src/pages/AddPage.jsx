import React from 'react'
import { addNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();
  function onAddNoteHandler({ name, tag }) {
    addNote({ name, tag });
    navigate('/');
  }

  return(
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}

export default AddPage;