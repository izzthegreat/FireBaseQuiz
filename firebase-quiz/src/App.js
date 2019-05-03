import React from 'react';
import './App.css';
import logo from './Images/qblogo.png';
import Firebase from 'firebase';
import Navbar from "./components/Navbar";
//import { Switch, Route, BrowserRouter } from 'react-router';

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
//eslint-disable-next-line
  //const Database = Firebase.database()

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            image: logo,
            speed:2000

        };
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div>

                {/* <BrowserRouter>
     <Navbar>
     <Switch>
     <Route path ="/home" component={Home} exact/>
     <Route path ="/about" component={About}/>
     <Route path ="/contact" component={Contact}/> 
     <Route component={Error} />
     </Switch>
     </Navbar>
     </BrowserRouter> */}
                </div>
                <center><u><h1>More Stuff Coming</h1></u></center>
            </div>
        )
    }
}

export default Home