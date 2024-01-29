import React from 'react'
import { getNote, deleteNote } from '../utils/network-data';
import { useNavigate, useParams } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi';
import { showFormattedDate } from '../utils/index';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <DetailPage id={id} navigate={navigate} />
  )
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.id,
      note: [],
      navigate: props.navigate,
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  async onDeleteHandler(id) {
    await deleteNote(id);

    this.props.navigate('/');
  }

  async componentDidMount() {
    const { data } = await getNote(this.state.id);

    this.setState(() => {
      return {
        note: data,
      }
    });

    this.setState({
      note: data,
    })
  }

  render() {
    if (!this.state.note) {
      return (
        <NotFoundPage />
      )
    }

    return(
      <section>
        <div className='detail-page'>
          <h3 className='detail-page__title'>{ this.state.note.title }</h3>
          <p className='detail-page__createdAt'>{ showFormattedDate(this.state.note.createdAt)}</p>
          <div className='detail-page__body'>{ this.state.note.body }</div>
          <div className='detail-page__action'>
            <button className='action' type='button' title='Delete' onClick={() => this.onDeleteHandler(this.state.note.id)}><FiTrash /></button>
          </div>
        </div>
      </section>
    )
  }
}

DetailPage.propTypes = {
  navigate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteHandler: PropTypes.func,
}

export default DetailPageWrapper;