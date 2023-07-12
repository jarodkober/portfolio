import styles from './Footer.module.scss';
import { BsEnvelope, BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer() {
	const handleClick = () => {
		const encEmail = 'amFyb2QuZGV2ZWxvcG1lbnRAZ21haWwuY29t';

		const el = document.getElementById('contact');

		el.setAttribute('href', 'mailto:'.concat(atob(encEmail)));
	};

	return (
		<footer className={styles.footer}>
			<a
				href="obfuscated"
				id="contact"
				onClick={handleClick}
			>
				<BsEnvelope />
			</a>
			<a
				href="https://github.com/jarodkober"
				rel="noreferrer"
				target="_blank"
			>
				<BsGithub />
			</a>
			<a
				href="https://www.linkedin.com/in/jarod-kober/"
				rel="noreferrer"
				target="_blank"
			>
				<BsLinkedin />
			</a>
		</footer>
	);
}

export default Footer;
