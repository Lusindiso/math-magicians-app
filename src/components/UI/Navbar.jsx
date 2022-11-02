import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => (
	<nav>
		<ul className={classes.nav}>
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/calculator">Calculator</NavLink></li>
			<li><NavLink to="/quote">Quote</NavLink></li>
		</ul>
	</nav>
);

export default Navbar;
