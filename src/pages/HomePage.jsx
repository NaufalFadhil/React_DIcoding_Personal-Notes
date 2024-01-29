import React from 'react';
import NoteList from '../components/NoteList';
import { deleteNote, getActiveNotes } from '../utils/network-data';
import SearchBar from '../components/SearchBar';
import { useSearchParams, Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import NoteListEmpty from '../components/NoteListEmpty';
import PropTypes from 'prop-types';

function HomePage() {
  const [searchParams, setSearchParams] =  useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    })
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getActiveNotes();
    setNotes(data);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    )
  });

  return (
    <section>
      <h2>Catatan Aktif</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {( notes == 0 
        ? <NoteListEmpty />
        : <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
      )}
      <div className='add-new-page'>
        <Link to='/notes/new'>
          <button className='action add-new-page__action'><FiPlus /></button>
        </Link>
      </div>
    </section>
  )
}

// HomePage.propTypes = {
//   onKeywordChangeHandler: PropTypes.func.isRequired,
// };

export default HomePage;