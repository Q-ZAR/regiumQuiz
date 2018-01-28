import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import Quiz from './components/Quiz';
import {DATA} from './config';

ReactDOM.render(<Quiz data={DATA} />, document.querySelector('#root'));
