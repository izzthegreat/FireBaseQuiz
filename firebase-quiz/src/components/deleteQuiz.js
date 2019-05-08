import React from 'react';
//import {database} from '../router'
//import QuizSelector from './quizSelector'
class QuizDel extends React.Component {
    constructor(){
        super()
        this.state={
            quizNames:[],
            selectedQuiz:undefined
        }
    }
    componentDidMount() {
    const quiz = document.getElementById('name');
    console.log(quiz)
        // // Retrieve quiz info from Firebase
        // const quiz = database.ref(`quizzes/quizNames/`)
        // quiz.once('value', snapshot => {
        //     let quizNames = snapshot.val()
        //     this.setState({
        //         quiz: quizNames
        //         })
        // })
    }
deleteQuiz(name){
    let newQuizArr = this.state.quiz;
    newQuizArr.map((quiz, index) => {
        if(quiz === quiz.name){
            this.setState({deletedQuizzes: [index, newQuizArr[index]]})
            newQuizArr.splice(index, 1)
        } else{console.log(quiz)}   
    });
    this.setState({zw
        quizNames: [],
        deleted: true
    })
}

   
    render(){
        return(
        <div>
    <button className={`btn btn-danger sticky-top `} onClick={this.deleteQuiz.bind(this)}>Delete</button>
    <div>
       {this.state.newQuizArr}
    </div>
        </div>)
    }
}
   
//quiz needs a unique id that can be removed or set = null
//warning popup at the delete-- , button trigger alert, the then ok button triggers deletion, and a cancel--- confirmation box



export default QuizDel;