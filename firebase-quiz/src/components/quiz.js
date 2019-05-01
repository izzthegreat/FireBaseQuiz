import React from 'react'
import Firebse from 'firebase'
import Question from './Question.js'
import '../css/quiz.css'

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

class Quiz extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <Question/>
            </div>
        )
    }
}

export default Quiz