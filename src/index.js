import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Movie from "./Movie";
import Board from "./Board";

ReactDOM.render(<Board></Board>,
    document.getElementById('root'));
registerServiceWorker();
