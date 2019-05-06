import React from 'react'
import Home from './components/home'
import Quiz from './components/quiz'
import QuizEditor from './components/QuizEditor'
import QuizSelector from './components/quizSelector'
import Navbar from './components/nav2'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import store from './store'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCrvSfTJuNJEUJjg1RW90NpqhKQ5s3SXFk",
    authDomain: "g6qb-51732.firebaseapp.com",
    databaseURL: "https://g6qb-51732.firebaseio.com",
    projectId: "g6qb-51732",
    storageBucket: "g6qb-51732.appspot.com",
    messagingSenderId: "446672263519"
};

firebase.initializeApp(config)

export const database = firebase.database()

function AppRouter() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/quiz' component={Quiz} />
                    <Route path='/quizSelect' component={QuizSelector}/>
                    <Route path='/editor' component={QuizEditor} />
                    <Route component={Error}/>
                </Switch>
            </Router>
        </Provider>
    )
}

export default AppRouter