import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsList, BsXLg } from 'react-icons/bs';
import styles from './Header.module.scss';
import ThemeToggle from '../theme-toggle/ThemeToggle';

function Header() {
	const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<NavLink to="/">jarod kober</NavLink>
			</div>

			<button
				aria-controls="navigation-menu"
				aria-expanded={showMobileNavMenu}
				onClick={() => {
					setShowMobileNavMenu(!showMobileNavMenu);
				}}
			>
				<span className="sr-only">Menu</span>
				{showMobileNavMenu ? <BsXLg /> : <BsList />}
			</button>

			<nav>
				<ul
					data-visible={showMobileNavMenu}
					id="navigation-menu"
				>
					<li>
						<NavLink
							onClick={() => {
								showMobileNavMenu &&
									setShowMobileNavMenu(false);
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
									setShowMobileNavMenu(false);
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
									setShowMobileNavMenu(false);
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
