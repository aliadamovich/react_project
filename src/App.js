// import logo from './logo.svg';

import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import { Navbar } from './components/Navbar/Navbar';
import { ProfilePageContainer } from './components/ProfilePage/ProfilePageContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DialogsContainer } from './components/DialogsPage/DialogsContainer';
import { UsersPage } from './components/UsersPage/UsersPage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { GalleryContainer } from './components/GalleryPage/GalleryContainer';


function App() {

  return (
		<BrowserRouter>
			<div className="wrapper">
				<HeaderContainer />
				<Navbar />
				<div className='wrapper__container'>
					<Routes>
						<Route path="/" element={<ProfilePageContainer />} />
						<Route path='/profile/:userId?' element={<ProfilePageContainer />}/>
						<Route path='/dialogs/*' element={<DialogsContainer  />} />
						<Route path='/gallery' element={<GalleryContainer /> }/>
						<Route path='/users' element={<UsersPage />} />
						<Route path='/login' element={<LoginPage />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

