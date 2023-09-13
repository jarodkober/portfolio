import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import { useEffect } from 'react';
import { BsXLg } from 'react-icons/bs';

function Modal({ children, onClose }) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return ReactDOM.createPortal(
		<>
			<div
				className={styles.background}
				onClick={onClose}
			></div>
			<div className={styles.modal}>
				<div className={styles.action}>
					<BsXLg onClick={onClose} />
				</div>
				<div className={styles.body}>{children}</div>
			</div>
		</>,
		document.querySelector('.modal-container')
	);
}

export default Modal;
