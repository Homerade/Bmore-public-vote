import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const ordinances = [
  {ReferenceNo: 1, Name: 'Ordinance 1', Description: 'stuff'},
  {ReferenceNo: 2, Name: 'Ordinance 2', Description: 'more stuff'}
];

ReactDOM.render(
	<App ordinances={ordinances} />, 
	document.getElementById('root')
);

