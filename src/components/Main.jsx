import React from 'react'
import NoteInput from './NoteInput'
import NoteList from './NoteList'
import SearchBar from './SearchBar';

function Main({ notes, addNote, deleteNote }) {
  return (
    <main>
      <h2>Catatan Aktif</h2>
      <SearchBar />
      {/* <NoteInput addNote={addNote} /> */}
      {
        (notes == 0 
        ? <p className='notes-list__empty-message'>Tidak ada catatan</p> 
        : <NoteList notes={notes} deleteNote={deleteNote} />
        )
      }
    </main>
  )
}

export default Main;