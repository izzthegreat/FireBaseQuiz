import React from 'react'
import { connect } from 'react-redux'
import { database } from '../router'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import QuestionEdit from './questionEditor';

class QuizEditor extends React.Component {
    constructor (props) {
        super()
        this.state = {
            quiz: props.location.state.quiz,
            newQuizName: props.location.state.name,
            newQuizDesc: props.location.state.desc,
            newQuizAuthor: props.location.state.auth,
            score: 0,
            modalOpen: false,
            quizHidden: false,
            qInputHidden: false,
            thanksHidden: true,
            updateQuiz: this.updateQuiz.bind(this)
        }
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

    openModal(){ //Opens the quizQuestion form
        this.setState ({
            modalOpen: true
        })
        console.log('Opening Modal', this.state)
    }

    closeModal(){ //Closes the quizQuestion form
        this.setState({
            modalOpen:false,
            qInputHidden: false
        })
        console.log('Closing Modal', this.state)
    }

    addQuestion(e){
        e.preventDefault()
        // Pulls info from the quizQuestion form
        const newQ = e.target.elements
        let quiz = this.state.quiz
        // ...and adds them tho the quiz in the state
        quiz.push({
            id:0,
            ask: newQ.ask.value,
            a: newQ.a.value,
            b: newQ.b.value,
            c: newQ.c.value,
            d: newQ.d.value,
            correct: newQ.correct.value
        })

        // then it updates the id value with the current index number 
        quiz.map(
            (question) => question.id = quiz.indexOf(question)
        )
        this.setState({
            quiz: quiz,
            qInputHidden: true //Hides the quizQuestion form.
            // Couldn't submit and close at the same time so I hide it so you can't edit the form after submit.
        })
    }

    switchQuiz(){ //Action creator - Switches the quizInterface to the new quiz
        this.props.switchQuiz(this.state.newQuizName)
    }

    submitQuiz(){// Saves the quiz and submits it to Firebase
        if (this.state.quiz.length>0) {
            //This submits the questions
            database.ref(`quizzes/${this.state.newQuizName}/`).set(this.state.quiz)
            //This submits the description for the links page
            database.ref (`quizzes/quizNames/${this.state.newQuizName}/desc/`).set(this.state.newQuizDesc)
            //This submits the author's name
            database.ref (`quizzes/quizNames/${this.state.newQuizName}/author/`).set(this.state.newQuizAuthor)
            this.setState({
                quizHidden: true, //Hides the quiz interface after completion.
                thanksHidden: false //Reveals a thank you page?/component?/div?
            })
        } else {
            alert('You gotta add some questions first!!')
        }
    }

    updateQuiz(edit){// Updates the quiz in state with an edited question
        let quiz = this.state.quiz
        console.log(edit)
        quiz[edit.id] = edit //... and sends the question to the correct index
        this.setState({
            quiz: quiz
        })
        console.log('The Quiz is Updated', this.state.quiz)
    }


    render(){
        return(
            <div className= "Component-BgQuiz">
                <div className='quizPreview' hidden={this.state.quizHidden}>
                    {/* Quiz Form Start */}
                    <form id='quizName' name={this.state.newQuizName} method='POST' onSubmit={this.getScore.bind(this)}>
                        <h1 className='quizTitle'>{this.state.newQuizName}</h1>
                        <span className= "qauthor">by {this.state.newQuizAuthor}</span>
                        <p className ="quizdesc">{this.state.newQuizDesc}</p>
                        <ol>
                            {
                                // Map the questions from the local state to the pages
                                this.state.quiz.map(question => {
                                    return(
                                        <div>
                                            <QuestionEdit
                                                id={question.id}
                                                ask={question.ask}
                                                a={question.a}
                                                b={question.b}
                                                c={question.c}
                                                d={question.d}
                                                correct={question.correct}
                                                updateQuiz={this.state.updateQuiz}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </ol>
                        {/* Form submit button */}
                        <input class="btn btn-primary" type='submit'/>
                    </form>
                    <div className= "Fscore" id='output'>
                        Final Score: {this.state.score}%
                    </div>
                </div>
                <Modal isOpen={this.state.modalOpen} ariaHideApp={false} onRequestClose={this.closeModal}>
                    <div>
                        <div className ="Addquestion">
                            <h1>
                               Add New Question
                            </h1>
                        </div>
                        <form id='addQuestion' onSubmit={this.addQuestion.bind(this)} method='POST'>
                            <div hidden={this.state.qInputHidden}>
                                Question:<input type='text' name='ask' required />*<br/>
                                A:<input type='text' name='a' required />*<br/>
                                B:<input type='text' name='b' required />*<br/>
                                C:<input type='text' name='c' required />*<br/>
                                D:<input type='text' name='d' required />*<br/>
                                Correct Answer?<select name='correct' required>*
                                    <option value='a'>A</option>
                                    <option value='b'>B</option>
                                    <option value='c'>C</option>
                                    <option value='d'>D</option>
                                </select>*<br/>
                                <h6 className='required'>*required</h6><br/><br/>
                                <input class="btn btn-primary" type='Submit' readOnly value='Add' />
                             
                            </div>
                            <div>
                                <input type='button' class="btn btn-warning"readOnly value='Close' onClick={this.closeModal.bind(this)} />
                            </div>  
                        </form>
                    </div>
                </Modal>
                <div hidden={this.state.quizHidden}>
                    <input type='button'class="btn btn-success" name='newQuestion' readOnly value='Add New Question' onClick={this.openModal.bind(this)} />
                    <input type='button' class="btn btn-primary" name='submitQuiz' readOnly value='Finish & Submit Quiz' onClick={this.submitQuiz.bind(this)}/>
                </div>
                <div className ="thanks" id='thanksPage' hidden={this.state.thanksHidden}>
                    <h1>Thanks for Creating an Awesome Quiz!!!</h1>
                    <Link to={`/quiz/${encodeURIComponent(this.state.newQuizName)}`}>Take Your New Quiz</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log ('QuizEditor State Set', state)
    return {
        answers: state.answers,
        quiz: state.quiz,
        quizName: state.quizName,
        editQuestion: state.editQuestion,
        update: state.update
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