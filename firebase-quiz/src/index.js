import React from 'react';
<<<<<<< Updated upstream
import ReactDOM from 'react-dom'
=======
import ReactDOM from 'react-dom';
import App from './App';
>>>>>>> Stashed changes
import * as serviceWorker from './serviceWorker';
import AppRouter from './router';

<<<<<<< Updated upstream
ReactDOM.render(<AppRouter />, document.getElementById('root'));
=======
ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> Stashed changes

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
