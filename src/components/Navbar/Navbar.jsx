import c from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return(
		<div className={c.content}>
			<NavLink to='/profile' className={c.logo}>
				<img src="https://mythemestore.com/beehive-preview/wp-content/themes/beehive/assets/images/logo-icon.svg" alt="" />
			</NavLink>

			<nav className={c.nav}>
				<NavLink to="/profile" className={ ({isActive}) => isActive ? `${c.item} ${c.active}` : c.item}>
					<div className={c.svg}>
					<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier"  ></g><g id="SVGRepo_iconCarrier"> <path d="M14.9999 15.2547C13.8661 14.4638 12.4872 14 10.9999 14C7.40399 14 4.44136 16.7114 4.04498 20.2013C4.01693 20.4483 4.0029 20.5718 4.05221 20.6911C4.09256 20.7886 4.1799 20.8864 4.2723 20.9375C4.38522 21 4.52346 21 4.79992 21H9.94465M13.9999 19.2857L15.7999 21L19.9999 17M14.9999 7C14.9999 9.20914 13.2091 11 10.9999 11C8.79078 11 6.99992 9.20914 6.99992 7C6.99992 4.79086 8.79078 3 10.9999 3C13.2091 3 14.9999 4.79086 14.9999 7Z"  strokeWidth="2"  ></path> </g></svg>
					</div>
				</NavLink>
				<NavLink to="/dialogs" className={({ isActive }) => isActive ? `${c.item} ${c.active}` : c.item}>
					<div className={c.svg}>
						<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier"  ></g><g id="SVGRepo_iconCarrier"> <path d="M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z" stroke="#292D32" strokeWidth="1.5"   ></path> <path d="M21.98 6.79001V10.79C21.98 13.73 20.63 15.31 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.60001 16.38 6 13.19 6H6.79004C6.53004 6 6.28004 6.01001 6.04004 6.04001C6.27004 3.35001 7.86004 2 10.79 2H17.19C20.38 2 21.98 3.60001 21.98 6.79001Z" stroke="#292D32" strokeWidth="1.5"  ></path> <path d="M13.4955 13.25H13.5045" stroke="#292D32" strokeWidth="2"  ></path> <path d="M9.9955 13.25H10.0045" stroke="#292D32" strokeWidth="2"  ></path> <path d="M6.4955 13.25H6.5045" stroke="#292D32" strokeWidth="2"  ></path> </g></svg>
					</div>
				</NavLink>

				<NavLink to="/users" className={({ isActive }) => isActive ? `${c.item} ${c.active}` : c.item} >
					<div className={c.svg}>
						<svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier"  ></g><g id="SVGRepo_iconCarrier"> <path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke="#292D32" strokeWidth="1.5"  ></path> <path d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003" stroke="#292D32" strokeWidth="1.5"  ></path> <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="#292D32" strokeWidth="1.5"  ></path> <path d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003" stroke="#292D32" strokeWidth="1.5"  ></path> <path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke="#292D32" strokeWidth="1.5"  ></path> <path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" stroke="#292D32" strokeWidth="1.5"  ></path> </g></svg>
						
					</div>
				</NavLink>
				<NavLink to="/gallery" className={({ isActive }) => isActive ? `${c.item} ${c.active}` : c.item}>
					<div className={c.svg}>
						<svg width="64px" height="64px" viewBox="0 0 512 512">
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<title>ionicons-v5-e</title>
								<path d="M432,112V96a48.14,48.14,0,0,0-48-48H64A48.14,48.14,0,0,0,16,96V352a48.14,48.14,0,0,0,48,48H80" fill="none" strokeLinejoin="round" strokeWidth="32px"></path>
								<rect x="96" y="128" width="400" height="336" rx="45.99" ry="45.99" fill="none" strokeLinejoin="round" strokeWidth="32px"></rect>
								<ellipse cx="372.92" cy="219.64" rx="30.77" ry="30.55" fill="none" strokeMiterlimit="10" strokeWidth="32px"></ellipse>
								<path d="M342.15,372.17,255,285.78a30.93,30.93,0,0,0-42.18-1.21L96,387.64" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"></path>
								<path d="M265.23,464,383.82,346.27a31,31,0,0,1,41.46-1.87L496,402.91" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"></path>
							</g>
						</svg>
					</div>
				</NavLink>
				<a className={c.item} href="/newsfeed">
					<div className={c.svg}>
						<svg width="64px" height="64px" viewBox="0 0 32 32"  id="Stock_cut" version="1.1" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier"  ></g><g id="SVGRepo_iconCarrier"> <desc></desc> <g> <path d="M25,3V1H3v28 c0,1.105,0.895,2,2,2h22c1.105,0,2-0.895,2-2V3H25z" fill="none"   strokeWidth="2"></path> <rect fill="none" height="6"   strokeWidth="2" width="14" x="7" y="5"></rect> <line fill="none"   strokeWidth="2" x1="25" x2="25" y1="3" y2="24"></line> <line fill="none"   strokeWidth="2" x1="25" x2="25" y1="26" y2="28"></line> <line fill="none"    strokeWidth="2" x1="6" x2="22" y1="15" y2="15"></line> <line fill="none"   strokeWidth="2" x1="6" x2="22" y1="19" y2="19"></line> <line fill="none"   strokeWidth="2" x1="6" x2="18" y1="23" y2="23"></line> </g> </g></svg>
					</div>
				</a>
				<a className={c.item} href="/cart">
					<div className={c.svg}>
						<svg id="i-cart"  viewBox="0 0 32 32" fill="none" stroke="#000000"   strokeWidth="2">
							<path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2"></path>
							<circle cx="25" cy="27" r="2"></circle>
							<circle cx="12" cy="27" r="2"></circle>
						</svg>
					</div>
				</a>
			</nav>
		</div>
		
	)
}