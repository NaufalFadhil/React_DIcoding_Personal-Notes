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

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  async function onLoginSuccess({ accessToken}) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    console.log(data);

    setAuthedUser(data);
  }

  if (authedUser === null) {
    return (
      <div className="contact-app">
        <Header />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    )
  }
  
  return (
    <div className="contact-app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;