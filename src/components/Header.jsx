import '../css/Header.css';
import MarvelLogo from '../assets/marvelLogo.png';
import NotificationIcon from '../assets/Notificacion.png';
import SettingsIcon from '../assets/Vector_settings.png';

export function Header() {
	return (
		<header className='header'>
			<img src={MarvelLogo} alt='' className='headerLogo' />
			<nav>
				<ul className='headerNav'>
					<li className='headerNavItem'>Home</li>
					<li className='headerNavItem active'>Personajes</li>
				</ul>
			</nav>
			<div className='settingNotificationContainer'>
				<span className='notificationIcon'>
					<img src={NotificationIcon} alt='' />
				</span>
				<span className='settingsIcon'>
					<img src={SettingsIcon} alt='' />
				</span>
			</div>
		</header>
	);
}
