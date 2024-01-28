import React from 'react';
import PropTypes from 'prop-types';

function LoginInput({ login }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onEmailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function onPasswordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    login({ email, password });
  }

  return (
    <form onSubmit={onSubmitHandler} className='input-login'>
      <input type="email" placeholder='Email' value={email} onChange={onEmailChangeHandler} />
      <input type="password" placeholder='Password' value={password} onChange={onPasswordChangeHandler} />
      <button>Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;