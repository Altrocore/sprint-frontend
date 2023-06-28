import './nav.css'
import smallLogo from '../../images/icon.png'
import homeIcon from '../../images/home.png'
import cart from '../../images/cart.png'
import favourite from '../../images/favourite.png'
import profile from '../../images/profile.png'
import Popup from '../popup/Popup'
import { useState } from 'react'

function Navbar({changeIsLogged}) {

	const [isPopup, togglePopup] = useState(false);

	return (
		<nav className='main-nav'>
			<ul className='nav-ul'>
				<li className='icon-sm'>
					<img alt='company logo' src={smallLogo}/>
				</li>
				<li className='nav-icon'>
					<img alt='home icon' src={homeIcon}/>
				</li>
				<li>
					<input className='search-inp' placeholder='Search'/>
				</li>
				<li className='nav-icon'>
					<img alt='cart icon' src={cart}/>
				</li>
				<li className='nav-icon fav-prof-cont'>
					<img alt='favourite icon' src={favourite}/>
					<img onClick={()=> togglePopup(!isPopup)} alt='profile icon' src={profile}/>
					{isPopup && <Popup changeIsLogged={changeIsLogged} toggle={togglePopup}></Popup>}
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;