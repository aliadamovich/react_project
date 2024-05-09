// import logo from './logo.svg';

import './App.scss';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Photos } from './components/Photos/Photos';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(AppProps) {
	// console.log(AppProps)
  return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<Navbar />
				<div className='wrapper__container'>
					<Routes>
						<Route path='/profile' element={<Profile posts={AppProps.state.profilePage} dispatch={AppProps.dispatch} />}/>
						<Route path='/dialogs/*' element={<Dialogs dUsers={AppProps.state.dialogPage.users} dMessages={AppProps.state.dialogPage} dPhotos={AppProps.state.dialogPage.photos} dispatch={AppProps.dispatch} />} />
						<Route path='/gallery' />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
