import './popup.css'
import { useRef, useEffect } from 'react';

function Popup({login, toggle, setLogin}) {

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
    sessionStorage.clear();
    sessionStorage.setItem('isSaved', false)
    toggle(false);
    setLogin('');
    console.log(sessionStorage.getItem('isSaved'))
  }

  return (
    <div ref={ref} className="main-wrap">
      <span>{login}</span>
      <button onClick={logout} className='logout-btn'>Logout</button>
    </div>
  )
}

export default Popup;