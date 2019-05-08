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
        const quiz = database.ref("quizzes/quizName/")
        quiz.once('value', snapshot => {
            let questions = snapshot.val()
            this.setState({
                quiz: questions
                })
        })

    }

deleteQuiz(id) {
    let newQuizArr = this.state.quizNames;
    newQuizArr.map((quiz, index) => {
      if (id === quiz.id) {
        this.setState({deletedQuizzes:[index, newQuizArr[index]]})
        newQuizArr.splice(index, 1);
      }
    });
    this.setState({
      quizNames: newQuizArr,
      deleted: true
    });
}

undoDelete(){
    let deletedArray = this.state.deletedQuizzes
    let newAdd = deletedArray.pop();
    let index = deletedArray.shift();
    let quizArray = this.state.quizNames;
    quizArray.splice(index,0,newAdd);
    this.setState({
        quiz: quizArray,
        deleted: false
    });
}
render(){
   return (<div>
    <button className={`btn btn-info sticky-top ${this.state.deleted ? 'show-undo':'undo-button'}`} onClick={this.undoDelete.bind(this)}>Undo</button>
    </div>)
}
}

//warning popup at the delete-- , button trigger alert, the then ok button triggers deletion, and a cancel--- confirmation box

// function mapStateToProps(state) {
//     console.log('Quiz State Mount', state)
//     return {
//         answers: state.answers,
//         score: state.score
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         quizSubmit: (score) => {
//             const action = {
//                 type: 'GRADE_QUIZ',
//                 score: score
//             }
//             dispatch(action)
//         }
//     }
// }
export default QuizDel;