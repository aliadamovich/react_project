// import logo from './logo.svg';

import './App.scss';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Photos } from './components/Photos/Photos';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DialogsContainer } from './components/Dialogs/DialogsContainer';


function App(AppProps) {
	// debugger
  return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<Navbar />
				<div className='wrapper__container'>
					<Routes>
						<Route path='/profile' element={<Profile />}/>
						<Route path='/dialogs/*' element={<DialogsContainer store={AppProps.store} />} />
						<Route path='/gallery' />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
