import c from './Navbar.module.scss';

export const Navbar = () => {
	return(
		<div className={c.content}>
			<div className={c.logo}>
				<img src="https://mythemestore.com/beehive-preview/wp-content/themes/beehive/assets/images/logo-icon.svg" alt="" />
					{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGo7B8VB0qY02-G-EjX5p8P5u3DSd6YWhxdw&usqp=CAU" alt="logo" /> */}
			</div>

			<nav className={c.nav}>
				<a href="#">
					<img src='https://cdn-icons-png.flaticon.com/512/9653/9653961.png' alt="chat" />
				</a>
				<a href="#">
					<img src='https://cdn-icons-png.flaticon.com/512/134/134808.png' alt="chat" />
				</a>
				<a href="#">
					<img src='https://cdn-icons-png.flaticon.com/512/1829/1829415.png' alt="chat" />
				</a>
				<a href="#">
					<img src='https://cdn-icons-png.flaticon.com/512/2636/2636890.png' alt="chat" />
				</a>
				<a href="#">
					<img src='https://cdn-icons-png.flaticon.com/512/134/134808.png' alt="chat" />
				</a>
				<a href="#">
					<img src='https://cdn-icons-png.flaticon.com/512/134/134808.png' alt="chat" />
				</a>
				<a href="#">
					<img src='https://cdn-icons-png.flaticon.com/512/134/134808.png' alt="chat" />
				</a>
				<a href="#">
					<img src='https://cdn-icons-png.flaticon.com/512/134/134808.png' alt="chat" />
				</a>
				<a href="#">
					<img src='https://cdn-icons-png.flaticon.com/512/134/134808.png' alt="chat" />
				</a>

			</nav>
		</div>
		
	)
}