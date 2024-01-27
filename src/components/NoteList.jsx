
import React from 'react'
import NoteItem from './NoteItem';

function NoteList({ notes, deleteNote }) {
  return (
    <div className='notes-list'>
      {
        notes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
            {...note}
          />
        ))
      }
    </div>
  )
}

export default NoteList;