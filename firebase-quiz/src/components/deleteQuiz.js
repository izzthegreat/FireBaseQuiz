import React from 'react';
import QuizSelector from './quizSelector'
import { database } from 'firebase';
class QuizDel extends React.Component{
    constructor(){
        super()
            this.state ={
            quizNames: []    
            }
        this.deleteQuiz = this.deleteQuiz.bind(this)
    }
    componentDidMount(){
        const quiz = database.ref(`quizzes/quizNames`)
        quiz.once('value', snapshot => {
            let quizNames = snapshot.val()
            this.setState({
                quiz: quizNames
            })
        })
    }
    deleteQuiz(name){
        let newQuizArr = this.state.quizNames;
        newQuizArr.map((quiz, index) => {if (name === quiz.name){
            this.setState({deletedQiuzzes: [index, newQuizArr[index]]})
            newQuizArr.splice(index,1)
        }
    });
        this.setState({ 
                quizNames: newQuizArr,
                 deleted: true
            
        });
    }
    render(){
        return(
            <div><p>
            {this.state.quizNames}`
             <button  className = {`btn btn-danger sticky-top ${this.state.deletedQiuzzes}`}onClick = {this.deleteQuiz}>Delete</button> 
             </p>  
            </div>
        )
    }
}





export default QuizDel;