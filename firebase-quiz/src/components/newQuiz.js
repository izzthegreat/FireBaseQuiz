import React from 'react'
import { database } from '../router'
import { Redirect } from 'react-router' 

function newQuiz (){


    return(
        <div>
            <form onSubmit={this.createNewQuiz.bind(this)}>
                <label>
                    What is the name of your quiz?* <br/>
                    <input className ="inquiz" type='text' name='quizName' required />
                </label><br/>
                <label>
                    What is your name? <br/>
                    <input className ="inname" type='text' name='quizAuthor' placeholder='Anonymous' />
                </label><br/>
                <label>
                    Give a short description of your quiz. <br/>
                <textarea className ="indesc" name='quizDesc' rows='2' cols='30'/>
                </label><br/>
                <input className="btn btn-primary" type='submit' />
            </form>
            <h6 className='required'>*required</h6>
            {
                if (edit == true) {
                    route = <Redirect to='/quizEdit' />
                }
            }
        </div>
    )
}

export default newQuiz