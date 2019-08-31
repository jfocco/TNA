import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import registerSW from './registerSW';

ReactDOM.render(<App />, document.getElementById('root'));
registerSW();