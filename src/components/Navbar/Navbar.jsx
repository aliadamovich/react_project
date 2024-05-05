import c from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return(
		<div className={c.content}>
			<a href='/profile' className={c.logo}>
				<img src="https://mythemestore.com/beehive-preview/wp-content/themes/beehive/assets/images/logo-icon.svg" alt="" />
			</a>

			<nav className={c.nav}>
				<NavLink to="/profile" className={ ({isActive}) => isActive ? `${c.item} ${c.active}` : c.item}>
					<img src='https://cdn-icons-png.flaticon.com/512/9653/9653961.png' alt="chat" />
				</NavLink>
				<NavLink to="/dialogs" className={({ isActive }) => isActive ? `${c.item} ${c.active}` : c.item}>
					<img src='https://cdn-icons-png.flaticon.com/512/134/134808.png' alt="chat" />
				</NavLink>
				<NavLink to="/photos" className={({ isActive }) => isActive ? `${c.item} ${c.active}` : c.item}>
					<img src='https://cdn-icons-png.flaticon.com/512/1829/1829415.png' alt="chat" />
				</NavLink>
				<a className={c.item} href="/groups">
					<img src="https://cdn-icons-png.flaticon.com/512/1769/1769041.png" alt="" />
				</a>
				<a className={c.item} href="/newsfeed">
					<img src="https://cdn-icons-png.flaticon.com/512/6423/6423878.png" alt="" />
				</a>
				<a className={c.item} href="#">
					<img src='https://cdn-icons-png.flaticon.com/512/134/134808.png' alt="chat" />
				</a>
				<a className={c.item} href="#">
					<img src='https://cdn-icons-png.flaticon.com/512/134/134808.png' alt="chat" />
				</a>
				<a className={c.item} href="#">
					<img src='https://cdn-icons-png.flaticon.com/512/134/134808.png' alt="chat" />
				</a>

			</nav>
		</div>
		
	)
}