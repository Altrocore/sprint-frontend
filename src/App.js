import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav-bar/Nav-bar';
import Login from './components/login-page/Login';
import Products from './components/Products/index.js';
import { useEffect, useState } from 'react';

function App() {

  const [isLoggedIn, setIsLogged] = useState(false);
  const [login, setLogin] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('isSaved')) {
      setIsLogged(sessionStorage.getItem('isSaved'))
      setLogin(sessionStorage.getItem('login'))
      console.log(sessionStorage.getItem('isSaved'))
    };
  }, [login]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar login={login} setLogin={setLogin}></NavBar>
      </header>
      <main>
      {isLoggedIn ? (
        <Login setLogin={setLogin}></Login>
      ) : (
        <Products/>
      )}
      </main>
    </div>
  );
}

export default App;
