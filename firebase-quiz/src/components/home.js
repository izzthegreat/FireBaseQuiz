import React from 'react'
import '../css/home.css'
import logo from '../Images/qblogo2.png'

function Home () {

    return(
         
            <div className ="homepage"> 
                <main>
                Welcome to the Group 6 Quiz Bowl!!
                <br />
                <img src={logo} className = "app-logo" alt="qblogo"></img>
                </main>
            </div>
        )
}

export default Home


