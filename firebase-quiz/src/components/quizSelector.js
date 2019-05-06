import React from 'react'
import { database } from '../router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class QuizSelector extends React.Component {
    constructor(){
        super()
        this.state={
            quizNames:[],
            selectedQuiz:undefined
        }
    }

    componentDidMount() {
        let data = database.ref('quizzes')
        data.once('value', snapshot => {
            let quizzes = snapshot.val()
            let quizNames = Object.keys(quizzes)
            console.log(quizzes)
            this.setState({
                quizNames: quizNames
            })
        })

    }
    quizSelect(e){
        let quizName  = e.target.id
        console.log(quizName)
        this.props.quizSelect(quizName)
    }
    
    render() {
        return(
            <div>
                <div>
                    <h1>
                    Choose! Your! Quiz!
                    </h1>
                </div>
                <div>
                    <nav>
                        {this.state.quizNames.map((name) => {
                            return(
                                <div>
                                    <Link to='/quiz' id={name} onClick={this.quizSelect.bind(this)}>
                                        {name}
                                    </Link>
                                </div>
                            )
                        })}
                    </nav>
                </div>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return{
        score: state.score
    }
}

function mapDispatchToProps(dispatch){
    return{
        quizSelect: (name) => {
                const action = {
                    type: 'NEW_QUIZ',
                    quizName: name
                }
                dispatch(action)
        },
        testFunction: () => {
            const action = {
                type: 'TEST'
            }
            dispatch (action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizSelector)