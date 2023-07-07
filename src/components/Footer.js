import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer() {
	return (
		<footer>
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
