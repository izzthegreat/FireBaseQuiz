import React from 'react'
import '../css/home.css'
<<<<<<< Updated upstream

function Home () {
=======
import Firebase from 'firebase'
import NavBar from './NavBar'

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

  const database = Firebase.database()

class Home extends React.Component {
    constructor(){
        super()
    }

    render(){
>>>>>>> Stashed changes
        return(
         
            <div> 
                This is the home page
            </div>
        )
}

export default Home


