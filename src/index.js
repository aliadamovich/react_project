import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { photos } from './redux/state';

async function getUserData() {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await resp.json();
	console.log(data);
	return data
}
async function getMessageData() {
	const resp = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
	const data = await resp.json();
	console.log(data);
	return data
}
async function getPostData() {
	const resp = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
	const data = await resp.json();
	console.log(data);
	return data
}

window.addEventListener('DOMContentLoaded', initApp)
function initApp() {
	Promise.all([getUserData(), getMessageData(), getPostData()]).then(values => {
		const [users, messages, posts] = values;

		let storage = {
			users: users,
			messages: messages,
			posts: posts
		}
		storage = {...storage, photos};
		
		renderApp(storage)
		
	})
}
function renderApp(data) {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<App appStorage={data}/>
		</React.StrictMode>
	);
}





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


