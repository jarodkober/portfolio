import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav>
			<NavLink
				to="/"
				className="logo"
			>
				jarod kober
			</NavLink>
			<ul>
				<li>
					<NavLink to="/projects">Projects</NavLink>
				</li>
				<li>
					<NavLink to="/learning">Learning</NavLink>
				</li>
				<li>
					<NavLink to="/experience">Experience</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
