import React from 'react';
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import AppRouter from './components/router';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

ReactDOM.render(<Home />, document.getElementById('root'));
>>>>>>> Stashed changes

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
