import React from 'react'
import { connect } from 'react-redux'
import { database } from '../router'
import { Link } from 'react-router-dom'
import Question from './question'
import Modal from 'react-modal';
import QuestionEdit from './questionEditor';

class QuizEditor extends React.Component {
    constructor () {
        super()
        this.state = {
            quiz: [{}],
            newQuizName: 'Default',
            newQuizDesc: '',
            score: 0,
            modalOpen: false,
            nameHidden: false,
            quizHidden: true,
            qInputHidden: false,
            editmode: false,
            thanksHidden:true
        }
    }

    createNewQuiz(e) {
        e.preventDefault()
        let newQuizName = e.target.elements.quizName.value
        let quizDesc = e.target.elements.quizDesc.value
        this.setState({
                newQuizName: newQuizName,
                newQuizDesc: quizDesc,
                quiz: [],
                nameHidden: true,
                quizHidden: false
        })
        console.log('Quiz Creation State', this.state)
    }

    getScore(e) { // Scoring Machanism
        e.preventDefault()
        let answers = this.props.answers // Create an array of submmitted answers
        console.log ('Submitted Answers', answers)
        let score=0
        let quiz = this.state.quiz
        for(let i = 0; i < quiz.length; i++) {
            // Compare submitted each of the answers to the correct answers in the database/local state
            if ( answers[i] === quiz[i].correct ){ score++ }
        }
        // Set the score as an integer percentile 
        let grade = ((score/quiz.length)*100).toFixed(0)
        // Send the score to the local state...
        this.setState({score: grade})
    }

    openModal(){
        this.setState ({
            modalOpen: true
        })
        console.log('Opening Modal', this.state)
    }

    closeModal(){
        this.setState({
            modalOpen:false,
            qInputHidden: false
        })
        console.log('Closing Modal', this.state)
    }

    addQuestion(e){
        e.preventDefault()
        const newQ = e.target.elements
        let quiz = this.state.quiz
        quiz.push({
            id:0,
            ask: newQ.ask.value,
            a: newQ.a.value,
            b: newQ.b.value,
            c: newQ.c.value,
            d: newQ.d.value,
            correct: newQ.correct.value
        })
        quiz.map(
            (question) => question.id = quiz.indexOf(question)
        )
        this.setState({
            quiz: quiz,
            qInputHidden: true
        })
    }
    switchQuiz(){
        this.props.switchQuiz(this.state.newQuizName)
    }

    submitQuiz(){
        database.ref(`quizzes/${this.state.newQuizName}/`).set(this.state.quiz)
        database.ref (`quizzes/quizNames/${this.state.newQuizName}/desc/`).set(this.state.newQuizDesc)
        this.setState({
            quizHidden: true,
            thanksHidden: false
        })
    }

    toggleEditOn (){
        this.setState({
            editmode: true
        })
    }

    toggleEditOff(){
        this.setState({
            editmode:false
        })
    }


    render(){
        return(
            <div>
                <div hidden={this.state.nameHidden}>
                    <form onSubmit={this.createNewQuiz.bind(this)}>
                        <label>
                            What is the name of your quiz? <br/>
                            <input type='text' name='quizName' />
                        </label><br/>
                        <label>
                            Give a quick summary of your quiz. <br/>
                        <textarea name='quizDesc' rows='5' cols='50' />
                        </label><br/>
                        <input type='submit' />
                    </form>
                </div>
                <div className='quizPreview' hidden={this.state.quizHidden}>
                    {/* Quiz Form Start */}
                    <form id='quizName' name={this.state.newQuizName} method='POST' onSubmit={this.getScore.bind(this)}>
                        <h1>{this.state.newQuizName}</h1>
                        <p>{this.state.newQuizDesc}</p>
                        <ol>
                            {
                                // Map the questions from the local state to the pages
                                this.state.quiz.map(question => {
                                    if (this.state.editmode === false) {
                                        return (
                                            <div>
                                                <Question
                                                    id={question.id}
                                                    question={question.ask}
                                                    a={question.a}
                                                    b={question.b}
                                                    c={question.c}
                                                    d={question.d}
                                                />
                                                <input type='button' value='edit' onClick={this.toggleEditOn.bind(this)}/>
                                            </div>
                                        )
                                    } else {
                                        return ( 
                                            <div>
                                                <QuestionEdit
                                                    id={question.id}
                                                    ask={question.ask}
                                                    a={question.a}
                                                    b={question.b}
                                                    c={question.c}
                                                    d={question.d}
                                                    correct={question.correct}
                                                />
                                            </div>
                                        )
                                    }
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
                <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
                    <div>
                        <div>
                            <h1>
                               Add New Question
                            </h1>
                        </div>
                        <form id='addQuestion' onSubmit={this.addQuestion.bind(this)} method='POST'>
                            <div hidden={this.state.qInputHidden}>
                                Question:<input type='text' name='ask'/><br/>
                                A:<input type='text' name='a'/><br/>
                                B:<input type='text' name='b'/><br/>
                                C:<input type='text' name='c'/><br/>
                                D:<input type='text' name='d'/><br/>
                                Correct Answer?<select name='correct'>
                                    <option value='a'>A</option>
                                    <option value='b'>B</option>
                                    <option value='c'>C</option>
                                    <option value='d'>D</option>
                                </select><br/><br/>
                                <input type='Submit' value='Add' />
                            </div>
                            <div>
                                <input type='button' value='Close' onClick={this.closeModal.bind(this)} />
                            </div>  
                        </form>
                    </div>
                </Modal>
                <div hidden={this.state.quizHidden}>
                    <input type='button' name='newQuestion' value='Add New Question' onClick={this.openModal.bind(this)} />
                    <input type='button' name='submitQuiz' value='Finish & Submit Quiz' onClick={this.submitQuiz.bind(this)}/>
                </div>
                <div id='thanksPage' hidden={this.state.thanksHidden}>
                    <h1>Thanks for Creating an Awesome Quiz!!!</h1>
                    <Link to='/quiz' onClick={this.switchQuiz.bind(this)}>Take Your New Quiz</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log ('QuizEditor Sate Set', state)
    return {
        answers: state.answers,
        quiz: state.quiz,
        quizName: state.quizName
    }
}

function mapDispatchToProps(dispatch){
    return {
        switchQuiz: (name) => {
            const action = {
                type: 'NEW_QUIZ',
                quizName: name
            }
            dispatch(action)
        }

    }
}

export default connect (mapStateToProps,mapDispatchToProps)(QuizEditor)