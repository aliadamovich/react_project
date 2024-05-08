import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './redux/state'
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
	root.render(
		<React.StrictMode>
			<App store={store} dispatch={store.dispatch.bind(store)} />
		</React.StrictMode>
	);
}

renderApp();

store.subscribe(renderApp);

reportWebVitals();


