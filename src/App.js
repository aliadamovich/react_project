// import logo from './logo.svg';

import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Photos } from './components/Photos/Photos';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<Navbar />
				<div className='wrapper__container'>
					<Routes>
						<Route path='/profile' element={<Profile />} />
						<Route path='/dialogs/*' element={<Dialogs />} />
						<Route path='/photos' element={<Photos />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
