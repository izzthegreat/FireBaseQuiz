import React, { useState } from 'react'
import { Redirect } from 'react-router-dom' 

export default function NewQuiz () {
    
    const [route, setRoute] = useState(<div></div>) 

    const useNewQuiz = (e) => {// Creates an new empty quiz...
        e.preventDefault()
        setRoute(
            <div>
                <Redirect to = {
                    { pathname: '/edit',
                        state: { //...using the info from the form
                            name: e.target.elements.quizName.value,
                            desc: e.target.elements.quizDesc.value,
                            auth: !e.target.elements.quizAuthor.value ?'Anonymous' :e.target.elements.quizAuthor.value,
                            quiz: []
                        }
                    }
                } />
            </div>
        )
    }

    return(
        <div className='Component-BgQuiz'>
            <form onSubmit={useNewQuiz}>
                <label>
                    What is the name of your quiz?* <br/>
                    <input className="inquiz" type='text' name='quizName' required />
                </label><br/>
                <label>
                    What is your name? <br/>
                    <input className="inname" type='text' name='quizAuthor' placeholder='Anonymous' />
                </label><br/>
                <label>
                    Give a short description of your quiz. <br/>
                <textarea className="indesc" name='quizDesc' rows='2' cols='30'/>
                </label><br/>
                <input className="btn btn-primary" type='submit' />
            </form>
            <h6 className='required'>*required</h6>
            { route }           
        </div>
    )
}