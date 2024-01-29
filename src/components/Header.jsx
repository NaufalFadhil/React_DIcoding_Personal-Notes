import React from 'react'
import { FiLogOut, FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext';
import PropTypes from 'prop-types';

function Header ({ logout }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <header>
      <h1><Link to='/'>Personal Notes</Link></h1>
      <div className='navigation'>
        <ul>
          {/* <li><Link to="/archives">Arsip</Link></li> */}
          <li><div onClick={toggleTheme}>{theme === 'light' ? <div className='toggle-theme'><FiMoon /></div> : <div className='toggle-theme'><FiSun /></div>}</div></li>
          <li><button className='button-logout' onClick={logout}><FiLogOut /></button></li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default Header