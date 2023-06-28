import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav-bar/Navbar';
import Login from './components/login-page/Login';
import Products from './components/Products/Products.js';
import { useEffect, useState, createContext, useContext } from 'react';

function App() {
  const [isLogged, changeIsLogged] = useState(false);

  console.log("rendered", !isLogged)

  return (
      <div className="App">
        <header className="App-header">
          <Navbar changeIsLogged={changeIsLogged}></Navbar>
        </header>
        <main>
        {!isLogged ? (
          <Login changeIsLogged={changeIsLogged}></Login>
        ) : (
          <Products/>
        )}
        </main>
      </div>
  );
}

export default App;
