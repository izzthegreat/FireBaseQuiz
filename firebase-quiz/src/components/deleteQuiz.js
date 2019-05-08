import React from 'react';
import {database} from '../router'

class QuizDel extends React.Component {
    constructor(){
        super()
        this.state={
            quizNames:[],
            selectedQuiz:undefined
        }
    }
    componentDidMount() {
       
        // Retrieve quiz info from Firebase
        const quiz = database.ref(`quizzes/quizNames/`)
        quiz.once('value', snapshot => {
            let questions = snapshot.val()
            this.setState({
                quiz: questions
                })
        })
    }

    deleteQuiz(name){
        let newQuizArr = this.state.quizNames;
        newQuizArr.map((quiz, index)=> {
            if(name ===quiz.name){
                this.setState({deletedQuizzes: [index, newQuizArr[index]]})
                newQuizArr.splice(index, 1);
            }
        });
        this.setState({
            quizNames: newQuizArr,
            deleted: true 
        })
    }
    render(){
        return(
        <div>
    <button className ={`btn btn-danger sticky-top ${this.state.deleted}`}>
    
    Delete</button>
    <div>
        {this.state.quizNames.name}
    </div>
        </div>)
    }
}
   
//quiz needs a unique id that can be removed or set = null
//warning popup at the delete-- , button trigger alert, the then ok button triggers deletion, and a cancel--- confirmation box



export default QuizDel;