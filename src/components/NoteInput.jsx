
import React from 'react'
import { FiPlusCircle } from "react-icons/fi";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(e) {
    this.setState({ title: e.target.value });
  }

  onBodyChangeHandler(e) {
    this.setState({ body: e.target.value });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    })
  }

  render () {
    return (
      <div className='add-new-page__input'>
        <h1>Buat Catatan</h1>
        <form onSubmit={this.onSubmitHandler}>
          <input className='add-new-page__input__title' type='text' placeholder='Title' value={this.state.title} onChange={this.onTitleChangeHandler} />
          <textarea className='add-new-page__input__body' placeholder='Write your note here...' value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
          <button type='submit' className='action add-new-page__action'><FiPlusCircle /></button>
        </form>
      </div>
    )
  }
}

export default NoteInput;