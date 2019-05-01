import React from 'react'
import Firebase from 'firebase'
import Question from './question.js'
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

  Firebase.initializeApp(config);

  const database = Firebase.database()

class Quiz extends React.Component {
    constructor(){
        super()

        this.state = {
            quiz: [
                {
                    id: 1,
                    ask: 'Question?',
                    a: 'An answer',
                    b: 'Another Answer',
                    c: 'Something Else',
                    d: 'Last One',
                    correct: 'b'
                }
            ],
            score: 0
        }
    }

    componentDidMount() {
        const quiz = database.ref("quiz/1")

        quiz.once('value', snapshot => {
            this.setState({
                quiz:[
                    snapshot.val()
                ]
            })
        })
    }
    
    getScore(e) {
        // var quiz = e.target.elements.quizName
        // var answers = [];
        // for (let i = 0; i < quiz.length ;i++) {
        //   answers.push(quiz.elements[i].value)
        // }
        // let score=0
        // for(let i = 0; i < quiz.length; i++) {
        //     if (answers[i]===this.state.quiz[i].correct){
        //         score++
        //     }
        // }
        // this.setState({
        //     score: (score/quiz.length)
        // })
    }

    render() {
        return(
            <div>
                <form id='quizName' onSubmit={this.getScore()}>
                    <h1>{this.props.title}</h1>
                    <ol>
                        {
                            this.state.quiz.map(question => {
                                return <Question
                                    id={question.id}
                                    question={question.ask}
                                    a={question.a}
                                    b={question.b}
                                    c={question.c}
                                    d={question.d}
                                    correct={question.correct}
                                />
                            })
                        }
                    </ol>
                    <input type='submit'/>
                </form>
                <div id='output'>
                Final Score: {this.state.score}%
                </div>
            </div>
        )
    }
}

export default Quiz