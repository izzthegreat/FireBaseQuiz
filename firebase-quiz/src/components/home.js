import React from 'react'
import '../css/home.css'
import { Provider } from 'react-redux'
import Quiz from './quiz';
import store from '../store/'

class Home extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <Provider store={store}>
                <div>
                    <Quiz/>
                </div>
            </Provider>
        )
    }
}

export default Home