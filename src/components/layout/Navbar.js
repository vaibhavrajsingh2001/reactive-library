import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import bookIcon from './logo192.png';

const Navbar = ({ icon, title }) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<img src={bookIcon} alt='book icon' style={{width:'30px'}}/>
				{title}
			</h1>
			<ul>
				<li>
					<Link to='/fav'>Favourites</Link>
				</li>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
}

Navbar.defaultProps = {
	title: "Reactive library",
	icon: "fas fa-book-reader"
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar