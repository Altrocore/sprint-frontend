import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav-bar/Navbar';
import Login from './components/login-page/Login';
import Products from './components/Products/Products.js';
import { useEffect, useState, createContext, useContext } from 'react';
import { CartProvider } from './components/Products/CartContext';

function App() {
  const [isLogged, changeIsLogged] = useState(false);
  
  console.log("rendered", !isLogged)

  return (
      <div className="App">
        <header className="App-header">
          <CartProvider>
            <Navbar changeIsLogged={changeIsLogged}></Navbar>
        
       
        {!isLogged ? (
          <Login changeIsLogged={changeIsLogged}></Login>
        ) : (
            <Products/>
        )}
          </CartProvider>
          </header>
        
      </div>
  );
}

export default App;
