// import logo from './logo.svg';

import './App.scss';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { ProfilePageContainer } from './components/ProfilePage/ProfilePageContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DialogsContainer } from './components/DialogsPage/DialogsContainer';
import { UsersPage } from './components/UsersPage/UsersPage';

function App() {

  return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<Navbar />
				<div className='wrapper__container'>
					<Routes>
						<Route path='/profile' element={<ProfilePageContainer />}/>
						<Route path='/dialogs/*' element={<DialogsContainer  />} />
						<Route path='/gallery' />
						<Route path='/users' element={<UsersPage />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

