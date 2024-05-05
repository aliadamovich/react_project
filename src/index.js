import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export let users = [];
export let posts = [];
export let messages = [];

async function getUserData () {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await resp.json();
	console.log(data);
	return data
}
async function getMessageData() {
	const resp = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=30');
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
function initApp () {
	Promise.all([getUserData(), getMessageData(), getPostData()]).then(values => {
		[users,messages, posts] = values;
	})
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const userData = [
// 	{ id: 1, name: 'Кот Борис', photo: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200' },
// 	{ id: 2, name: 'Киска Сосиска', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEnIBb3pDED2IMNh5AxAKPlMZdQN6xw8Cg2g&usqp=CAU' },
// 	{ id: 3, name: 'Деловая киса', photo: 'https://www.earth.com/_next/image/?url=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2023%2F12%2F13092349%2FFree-ranging-cats-960x640.jpg&w=3840&q=75' },
// 	{ id: 4, name: 'Кот Бездомный', photo: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg' },
// 	{ id: 5, name: 'Котик', photo: 'https://www.shutterstock.com/image-photo/funny-british-shorthair-cat-portrait-600nw-2097266809.jpg' }
// ]
