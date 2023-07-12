import styles from './Heading.module.scss';

function Heading({ id, level, children }) {
	const Tag = level;

	const className = styles[level];

	return (
		<Tag
			className={className}
			id={id}
		>
			{children}
		</Tag>
	);
}

export default Heading;
