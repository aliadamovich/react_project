import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './redux/redux-store'
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp(state) {

	root.render(
		<React.StrictMode>
			<App state={state} dispatch={store.dispatch.bind(store)} />
		</React.StrictMode>
	);
}

renderApp(store.getState());

store.subscribe(() => {
	let state = store.getState()
	renderApp(state);
});

reportWebVitals();


