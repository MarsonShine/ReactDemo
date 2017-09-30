import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './quicklyStart/HelloWorld'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/> , document.getElementById('root'));
setInterval(function(){
    ReactDOM.render(<HelloWorld/> , document.getElementById('root2'))
} ,1000);
registerServiceWorker();