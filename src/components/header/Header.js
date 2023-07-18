import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsList, BsXLg } from 'react-icons/bs';
import styles from './Header.module.scss';
import ThemeToggle from '../theme-toggle/ThemeToggle';

function Header() {
	const [showMobileNavMenu, setshowMobileNavMenu] = useState(false);

	return (
		<header className={`flex ${styles.header}`}>
			<div className={styles.logo}>
				<NavLink to="/">jarod kober</NavLink>
			</div>

			<button
				aria-controls="navigation-menu"
				aria-expanded={showMobileNavMenu}
				onClick={() => {
					setshowMobileNavMenu(!showMobileNavMenu);
				}}
			>
				<span className="sr-only">Menu</span>
				{showMobileNavMenu ? <BsXLg /> : <BsList />}
			</button>

			<nav>
				<ul
					className="flex"
					data-visible={showMobileNavMenu}
					id="navigation-menu"
				>
					<li>
						<NavLink
							onClick={() => {
								showMobileNavMenu &&
									setshowMobileNavMenu(false);
							}}
							to="/experience"
						>
							Experience
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={() => {
								showMobileNavMenu &&
									setshowMobileNavMenu(false);
							}}
							to="/learning"
						>
							Learning
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={() => {
								showMobileNavMenu &&
									setshowMobileNavMenu(false);
							}}
							to="/projects"
						>
							Projects
						</NavLink>
					</li>
					<li>
						<ThemeToggle />
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
