import {createContext, useContext, useState} from 'react';

const MyContext = createContext('');
export const useMyContext = () => useContext(MyContext);
const MyContextProvider = ({ children }) => {
  const [login, setLogin] = useState("");

  const updateContext = (newValue) => {
    setLogin(newValue);
    console.log(login, login === '' )
  };

  return (
    <MyContext.Provider value={{ login, updateContext }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;