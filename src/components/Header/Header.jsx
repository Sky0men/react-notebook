/* eslint-disable indent */
import { useCallback, useState } from 'react';
import Button from '../Button/Button';
import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

const logos = ['/logotype.svg', '/vite.svg'];

function Header() {
	const [logoIndex, setLogoIndex] = useState(0);

	const toggleLogo = useCallback(() => {
		setLogoIndex(state => Number(!state));
	}, []);

	return (
		<>
			<img className={styles.logo} src={logos[logoIndex]} alt='Логотип журнала'/>
			<SelectUser/> 
			<Button onClick={toggleLogo}>сменить лого</Button> 
		</>
	);
}

export default Header;