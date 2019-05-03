import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './components/home';

<<<<<<< Updated upstream
ReactDOM.render(<App />, document.getElementById('root'));
=======

ReactDOM.render(<Home />, document.getElementById('root'));
>>>>>>> Stashed changes

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
