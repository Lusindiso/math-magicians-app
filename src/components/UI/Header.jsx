import Navbar from './Navbar';
import classes from './Header.module.css';

const Header = () => (
	<header className={classes.header}>
		<h1>Math Magicians</h1>
		<Navbar />
	</header>
);

export default Header;