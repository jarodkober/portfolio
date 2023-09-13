import styles from './ThemeToggle.module.scss';
import { useEffect, useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

function ThemeToggle() {
	const [theme, setTheme] = useState('dark');

	const toggleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	useEffect(() => {
		document.documentElement.className = theme;
	}, [theme]);

	return (
		<div className={styles.themeToggle}>
			<input
				id="checkbox"
				onClick={toggleTheme}
				type="checkbox"
			/>
			<label htmlFor="checkbox">
				<BsMoonFill />
				<BsSunFill />
				<span></span>
			</label>
		</div>
	);
}

export default ThemeToggle;
