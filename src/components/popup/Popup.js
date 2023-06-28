import './popup.css'
import { useRef, useEffect } from 'react';
import { useMyContext } from '../../Context';

function Popup({toggle, changeIsLogged}) {
  const { login, updateContext } = useMyContext();
  const ref = useRef();

	useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        toggle(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const logout = () => {
    updateContext('');
    toggle(false);
    changeIsLogged(false)
  }

  return (
    <div ref={ref} className="main-wrap">
      <span>{login}</span>
      <button onClick={logout} className='logout-btn'>Logout</button>
    </div>
  )
}

export default Popup;