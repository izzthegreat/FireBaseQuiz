import React from 'react'
import { database } from '../router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../css/home.css'


class QuizSelector extends React.Component {
    constructor(){
        super()
        this.state={
            quizNames:[],
        }
    }

    componentDidMount() {
        let data = database.ref('quizzes/quizNames/')
        data.once('value', snapshot => {
            let quizNames = snapshot.val()
            console.log(quizNames)
            this.setState({
                quizNames: quizNames
            })
        })

    }

    render() {
        return(
            <div>
                <div className ="quizsel">
                    <h1>
                    Choose! Your! Quiz!
                    </h1>
                </div>
                <div>
                    <nav>
                        {Object.keys(this.state.quizNames)
                            .map((name) => {
                                return(
                                    <div>
                                        <Link to={`/quiz/${name}`}>
                                            {name}
                                        </Link>
                                        <p>{this.state.quizNames[name].desc}</p>
                                    </div>
                                )
                            }
                        )}
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