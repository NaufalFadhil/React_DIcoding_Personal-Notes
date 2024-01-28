import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import PropTypes from 'prop-types';

function RegisterInput() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function onNameChangeHandler(event) {
    setName(event.target.value);
  }

  function onEmailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function onPasswordChangeHandler(event) {
    setPassword(event.target.value);
  }

  async function onSubmitHandler(event) {
    event.preventDefault();

    const { error } = await register({ name, email, password });

    if (!error) {
      navigate('/');
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="input-register">
      <input type="text" placeholder="Nama" value={name} onChange={onNameChangeHandler} />
      <input type="email" placeholder="Email" value={email} onChange={onEmailChangeHandler} />
      <input type="password" placeholder="Password" value={password} onChange={onPasswordChangeHandler} />
      <button>Daftar</button>
    </form>
  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
}

export default RegisterInput;