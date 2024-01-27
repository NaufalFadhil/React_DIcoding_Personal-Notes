import React from 'react';
import NoteList from '../components/NoteList';
import { deleteNote, getAllNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';
import { useSearchParams, Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

function HomePageWrapper() {
  const [searchParams, setSearchParams] =  useSearchParams();
  
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  )


}
class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteContact(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      }
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((contact) => {
      return contact.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      )
    });

    return (
      <section>
        <h2>Catatan Aktif</h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <NoteList notes={notes} onDelete={this.onDeleteHandler} />
        <div className='add-new-page'>
          <Link to='/notes/new'>
            <button className='action add-new-page__action'><FiPlus /></button>
          </Link>
        </div>
      </section>
    )
  }
}

export default HomePageWrapper;