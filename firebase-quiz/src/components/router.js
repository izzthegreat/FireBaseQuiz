import React from 'react'
import Home from './home'
import Quiz from './quiz';
import QuizEditor from './QuizEditor'
import Navbar from './nav2'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import store from '../store/'
import { BrowserRouter as Router, Route} from "react-router-dom"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCrvSfTJuNJEUJjg1RW90NpqhKQ5s3SXFk",
    authDomain: "g6qb-51732.firebaseapp.com",
    databaseURL: "https://g6qb-51732.firebaseio.com",
    projectId: "g6qb-51732",
    storageBucket: "g6qb-51732.appspot.com",
    messagingSenderId: "446672263519"
};

firebase.initializeApp(config);

export const database = firebase.database()

function AppRouter() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar/>
                <Route path='/' component={Home} exact />
                <Route path='/quiz' component={Quiz} />
                <Route path='/editor' component={QuizEditor} />
            </Router>
        </Provider>
    )
}

export default AppRouter