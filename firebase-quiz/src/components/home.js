import React from 'react'
import '../css/home.css'
<<<<<<< Updated upstream
import { Provider } from 'react-redux'
import Quiz from './quiz';
import store from '../store/'
=======
import Firebase from 'firebase'
import NavBar from "./NavBar"

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCrvSfTJuNJEUJjg1RW90NpqhKQ5s3SXFk",
    authDomain: "g6qb-51732.firebaseapp.com",
    databaseURL: "https://g6qb-51732.firebaseio.com",
    projectId: "g6qb-51732",
    storageBucket: "g6qb-51732.appspot.com",
    messagingSenderId: "446672263519"
  };

  Firebase.initializeApp(config);

  const Database = Firebase.database()
>>>>>>> Stashed changes

class Home extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
<<<<<<< Updated upstream
            <Provider store={store}>
                <div>
                    <Quiz/>
                </div>
            </Provider>
=======
            <div>
                <NavBar />
                <center><u><h1>More Stuff Coming</h1></u></center>
            </div>
>>>>>>> Stashed changes
        )
    }
}

export default Home

