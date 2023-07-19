import styles from './Panel.module.scss';

function Panel({ children }) {
	return <div className={styles.panel}>{children}</div>;
}

export default Panel;
