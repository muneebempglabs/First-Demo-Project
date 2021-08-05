import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
    <Basic />
  </React.StrictMode>,
  document.getElementById('root')
);

/*<Header title = {title} link1 = {link1} link2 = {link2} link3 = {link3}/>
    <App />*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
