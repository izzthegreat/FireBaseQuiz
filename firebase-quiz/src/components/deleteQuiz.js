// import React from 'react';
// //import QuizSelector from './quizSelector'
// import { database } from 'firebase';
// class QuizDel extends React.Component{
//     constructor(){
//         super()
//             this.state ={
//             quizNames: [],    
//             }
//         // this.deleteQuiz = this.deleteQuiz.bind(this);
//     }
//     componentDidMount() {
//         const {match: { params }} = this.props
//         this.props.quizSelect(params.quizName)
//         // Retrieve quiz info from Firebase
//         const quiz = database.ref(`quizzes/${params.quizName}/`)
//         quiz.once('value', snapshot => {
//             let questions = snapshot.val()
//             this.setState({
//                 quiz: questions
//                 })
//         })

//     }
//     deleteQuiz(id){
//         let newQuizArr = this.state.quizNames.id;
//         newQuizArr.map((quiz, index) => {if (id === quiz.id){
//             this.setState({deletedQuizzes: [index, newQuizArr[index]]})
//             newQuizArr.splice(index,1);
//         }
//     });
//         this.setState({ 
//                 quizNames: newQuizArr,
//                  deleted: true
            
//         });
//     }
//     render(){
//         return(
//             <div><p>
//             {this.state.quizNames}`
//              <button  className = {`btn btn-danger sticky-top ${this.state.deletedQuizzes}`}onClick = {this.deleteQuiz}>Delete</button> 
//              </p>  
//             </div>
//         )
//     }
// }





// export default QuizDel;