import React from 'react'
import { database } from '../router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../css/home.css'
//import QuizDel from './deleteQuiz'


class QuizSelector extends React.Component {
    constructor(){
        super()
        this.state={
            quizNames:[],
            deleteQuizPrompt: this.deleteQuizPrompt.bind(this),
            deleteQuiz: this.deleteQuiz.bind(this)
        }
    }

    componentDidMount() {
        let data = database.ref('quizzes/quizNames/')
        data.on('value', snapshot => {
            let quizNames = snapshot.val()
            console.log(quizNames)
            this.setState({
                quizNames: quizNames
            })
        })
    }

    deleteQuizPrompt(quiz){
        if (window.confirm(`Are you sure you want to delete ${quiz}?`)){
            this.state.deleteQuiz(quiz)
            window.alert(`${quiz} has been deleted.`)
        }   
    }

    deleteQuiz(quiz){
        database.ref(`quizzes/quizNames/${quiz}`).set(null)
        database.ref(`quizzes/${quiz}`).set(null)
    }

    render() {
        return(
            <div>
                <div className ="quizsel">
                    <h1>
                    Choose a quiz!
                    </h1>
                </div>
                <div>
                    <nav>
          {Object.keys(this.state.quizNames).map((name) => {
                            return(
                                <div className="quizname">
                                    <Link to={`/quiz/${encodeURIComponent(name)}`} id={name}>
                                        {name}
                                    </Link>
                                    <p>{this.state.quizNames[name].desc}</p>
                                    <input type='button' readOnly value='Delete' onClick={()=>this.state.deleteQuizPrompt(name)} />
                                </div>
                            )
                        })}

                    </nav>
                </div>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return{
        score: state.score
    }
}

function mapDispatchToProps(dispatch){
    return{
        testFunction: () => {
            const action = {
                type: 'TEST'
            }
            dispatch (action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizSelector)