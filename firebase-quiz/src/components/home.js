import React from 'react';
import '../css/home.css';
import { Provider } from 'react-redux';
import Quiz from './quiz';
import store from '../store/';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from "./Navbar";
import Account from "./account";
import Score from "./score";

class Home extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <Provider store={store}>
            <BrowserRouter>
            <Navigation>
                <Switch>
                    <Route path= "/" component = {Home}exact/>
                    <Route path = "/account" component={Account}/>
                    <Route path= "/quiz" component ={Quiz}/>
                    <Route path = "/score" component = {Score}/>
                    <Route component = {Error}/>
                </Switch>
                </Navigation>
            </BrowserRouter>
            </Provider>
        )
    }
}

export default Home

