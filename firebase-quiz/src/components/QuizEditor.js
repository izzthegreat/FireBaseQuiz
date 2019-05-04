import React from 'react'
import { connect } from 'react-redux'
import { database } from '../router'

class QuizEditor extends React.Component {
    constructor () {
        super()
        this.state = {
        }
    }

    componentDidMount() {
        const quiz = database.ref(`quizzes/${this.props.quizName}/`)
        quiz.on('child_changed', snapshot => {
            this.setState({
                quiz: snapshot.val()
            })
        })
    }

    render(){
        return(
            <div>
                I Work!<br/>
                <button onClick={this.props.testCommand}>
                    TEST button
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quizName:state.quizName
    }
}

function mapDispatchToProps(dispatch){
    return {
        testCommand: () => {
            const action = {
                type: 'TEST'
            }
            dispatch(action)
        }

    }
}

export default connect (mapStateToProps,mapDispatchToProps)(QuizEditor)