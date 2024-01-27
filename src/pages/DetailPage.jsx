import React from 'react'
import { getNote } from '../utils/local-data';
import { useParams } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi';
import { showFormattedDate } from '../utils/index';

function DetailPage() {
  const  { id } = useParams();
  const note = getNote(id);

  return(
    <section>
      <div className='detail-page'>
        <h3 className='detail-page__title'>{ note.title }</h3>
        <p className='detail-page__createdAt'>{showFormattedDate(note.createdAt)}</p>
        <div className='detail-page__body'>{ note.body }</div>
        <div className='detail-page__action'>
          <button className='action' type='button' title='Delete'><FiTrash /></button>
        </div>
      </div>
    </section>
  )
}

export default DetailPage;