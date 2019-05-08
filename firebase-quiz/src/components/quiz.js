import React from 'react'
import { database } from '../router'
import Question from './question.js'
import { connect } from 'react-redux'
import '../css/quiz.css'


class Quiz extends React.Component {
    constructor(){
        super()
        //Ready local state for input
        this.state = { 
            quiz: [{}],
            quizName:'',
            hideQuiz: false,
            hideScore: true,
            score: 0
        }
    }

    componentDidMount() {
        const {match: { params }} = this.props
        this.props.quizSelect(params.quizName)
        // Retrieve quiz info from Firebase
        const quiz = database.ref(`quizzes/${params.quizName}/`)
        quiz.once('value', snapshot => {
            let questions = snapshot.val()
            this.setState({
                quiz: questions,
                quizName: params.quizName
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
        this.setState({
            score: grade,
            hideQuiz: true,
            hideScore: false

        })
        //And to the global state
        this.props.quizSubmit(grade)
 
    }

    render() {
        return (
            <div>
                <form id='quizName' name={this.state.quizName} method='POST' hidden={this.state.hideQuiz} onSubmit={this.getScore.bind(this)}>
                    <h1>{this.state.quizName}</h1>
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
                        {/* Form submit button */}
                        <input type='submit'/>
                    </form>
                    <div id='output' hidden={this.state.hideScore}>
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
        },
        quizSelect: (name) => {
            const action = {
                type: 'NEW_QUIZ',
                quizName: name
            }
            dispatch(action)
    },
    }
}

// Make sure export is connected to the props from Redux
export default connect (mapStateToProps, mapDispatchToProps)(Quiz)