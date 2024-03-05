/* eslint-disable indent */
import styles from './Header.module.css';

function Header() {
	return (
		<img className={styles.logo} src='/logotype.svg' alt='Логотип журнала'/>
	);
}

export default Header;