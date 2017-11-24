import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StateController from './stateController';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StateController />, document.getElementById('root'));
registerServiceWorker();
