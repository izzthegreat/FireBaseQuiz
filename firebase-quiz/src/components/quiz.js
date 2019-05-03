import React from 'react'
import firebase from 'firebase'
import Question from './question.js'
import { connect } from 'react-redux'
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

firebase.initializeApp(config);

const database = firebase.database()

class Quiz extends React.Component {
    constructor(){
        super()
        //Ready local state for input
        this.state = { 
            quiz: [{}],
            score: 0
        }
    }

    componentDidMount() {
        // Retrieve quiz info from Firebase
        const quiz = database.ref("quizzes/quizName/")
        quiz.once('value', snapshot => {
            let questions = snapshot.val()
            this.setState({
                quiz: questions
                })
        })

    }

    getScore(e) { //Scoring Machanism
        e.preventDefault()
        let answers = this.props.answers //Create an array of submmitted answers
        console.log ('Submitted Answers', answers)
        let score=0
        for(let i = 0; i < answers.length; i++) {
            //Compare submitted each of the answers to the correct answers in the database/local state
            if (answers[i]===this.state.quiz[i].correct){
                score++
            }
        }
        //Set the score as an integer percentile 
        let grade = ((score/answers.length)*100).toFixed(0)
        //Send the score to the local state...
        this.setState({score: grade})
        //And to the global state
        this.props.quizSubmit(grade)
    }

    

    render() {
        return(
            <div>
                <form id='quizName' name={this.props.quizName} method='POST' onSubmit={this.getScore.bind(this)}>
                    <h1>{this.props.quizName}</h1>
                    <ol>
                        {
                            //Map the questions from the local state to the pages
                            this.state.quiz.map(question => {
                                return <Question
                                    id={question.id}
                                    question={question.ask}
                                    a={question.a}
                                    b={question.b}
                                    c={question.c}
                                    d={question.d}
                                />
                            })
                        }
                        </ol>
                        {/*Form submit button*/}
                        <input type='submit'/>
                    </form>
                    <div id='output'>
                    Final Score: {this.state.score}%
                    </div>
                </div>
        )
    }
}

// Pull props from the global state
function mapStateToProps(state) {
    console.log('Quiz State Mount', state)
    return {
        answers: state.answers,
        score: state.score
    }
}

// Dispatch actions to affect the state
function mapDispatchToProps(dispatch) {
    return {
        quizSubmit: (score) => {
            const action = {
                type: 'GRADE_QUIZ',
                score: score
            }
            dispatch(action)
        }
    }
}

// Make sure export is connected to the props from Redux
export default connect (mapStateToProps, mapDispatchToProps)(Quiz)