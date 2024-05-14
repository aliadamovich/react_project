import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './redux/redux-store'
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function renderApp() {
	// debugger
	// console.log(store);
	
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	);
// }

// renderApp();

// store.subscribe(() => {

// 	renderApp();
// });


reportWebVitals();


