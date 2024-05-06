// import logo from './logo.svg';

import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Photos } from './components/Photos/Photos';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(AppProps) {
  return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<Navbar />
				<div className='wrapper__container'>
					<Routes>
						<Route path='/profile' element={<Profile posts={AppProps.appStorage.posts}/>} />
						<Route path='/dialogs/*' element={<Dialogs dUsers={AppProps.appStorage.users} dMessages={AppProps.appStorage.messages} dPhotos={AppProps.appStorage.photos} />} />
						<Route path='/photos' element={<Photos />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
