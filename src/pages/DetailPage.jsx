import React from 'react'
import { getNote, deleteNote } from '../utils/local-data';
import { useNavigate, useParams } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi';
import { showFormattedDate } from '../utils/index';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return (
      <NotFoundPage />
    )
  }

  return (
    <DetailPage note={note} navigate={navigate} />
  )
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.note.id,
      title: props.note.title,
      body: props.note.body,
      createdAt: props.note.createdAt,
      navigate: props.navigate,
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.props.navigate('/');
  }


  render() {
    return(
      <section>
        <div className='detail-page'>
          <h3 className='detail-page__title'>{ this.state.title }</h3>
          <p className='detail-page__createdAt'>{ showFormattedDate(this.state.createdAt)}</p>
          <div className='detail-page__body'>{ this.state.body }</div>
          <div className='detail-page__action'>
            <button className='action' type='button' title='Delete' onClick={() => this.onDeleteHandler(this.state.id)}><FiTrash /></button>
          </div>
        </div>
      </section>
    )
  }
}

DetailPage.propTypes = {
  note: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
}

export default DetailPageWrapper;