import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import { getUserLogged, putAccessToken } from '../utils/network-data';
import RegisterPage from '../pages/RegisterPage';
import ThemeContext from '../context/ThemeContext';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
      setTheme(localStorage.getItem('theme') || 'dark');
    });
  }, []);

  async function onLoginSuccess({ accessToken}) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  async function onLogout() {
    setAuthedUser(null);

    putAccessToken(null);
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const tempTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', tempTheme);
      return theme === 'light' ? 'dark' : 'light';
    });
  };

  const contextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  if (initializing) {
    return null;
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className="app-container" data-theme={theme}>
        <Header logout={onLogout} />
        <main>
          {(authedUser === null) ? (
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/notes/new" element={<AddPage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          )}
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;