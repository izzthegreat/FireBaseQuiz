import React from 'react'
import '../css/home.css'
import logo from '../Images/qblogo2.png'
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from '../Images/bluesplash.jpg'
import image2 from '../Images/bluemtn.jpg'
import image3 from '../Images/blueflower.jpg'
import image4 from '../Images/comet.jpg'
import image5 from '../Images/bluewave.jpg'
import image6 from '../Images/net.jpg'
import image7 from '../Images/icebluewave.jpg'
import image8 from '../Images/redblue.jpg'
import image9 from '../Images/jellyfish.jpg'
import image10 from '../Images/mockaroon.jpg'
import image11 from '../Images/starnite.jpg'
import image12 from '../Images/blueice.jpg'
function Home () {

    return(
         
            <div className ="homepage"> 
                
                <div className= "welogo">
                Welcome to the Group 6 Quiz Bowl!!
                <br />
                <img src={logo} className = "app-logo" alt="qblogo"/>
                </div>
                <div className ="BS">
                <BackgroundSlideshow className ="BS" images={[ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12      ]} />
                </div>
            </div>   
        )
}

export default Home


