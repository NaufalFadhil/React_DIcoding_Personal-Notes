
import React from 'react'
import { showFormattedDate } from '../utils';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NoteItem extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      id: props.id,
      title: props.title,
      body: props.body,
      createdAt: props.createdAt,
      detailLink: `/notes/${props.id}`
    }
  }

  render() {
    return (
      <div className='note-item'>
        <div className='note-item__content'>
          <h3 className='note-item__title'>
            <Link to={ this.state.detailLink }>
              {this.state.title}
            </Link>
          </h3>
          <p className='note-item__createdAt'>{showFormattedDate(this.state.createdAt)}</p>
          <p className='note-item__body'>{this.state.body}</p>
        </div>
      </div>
    )
  }
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default NoteItem;