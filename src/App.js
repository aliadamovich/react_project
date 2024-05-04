// import logo from './logo.svg';

import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
// import { Posts } from './components/Posts';
import { Profile } from './components/Profile/Profile';




function App() {
  return (
		<div className="wrapper">
			<Header />
			<Navbar />
			<Profile />
			
		</div>
	);
}

export default App;
