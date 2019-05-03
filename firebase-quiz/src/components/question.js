import React from 'react'
import { connect } from 'react-redux'
import '../css/quiz.css'


class Question extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <li key={this.props.id}>
                {this.props.question}<br/>
                <input type='radio' name={this.props.id}  onClick = {this.props.changeAnswer.bind(this)} id={`a${this.props.id}`} value='a'/><label htmlFor={`a${this.props.id}`}>A. {this.props.a}</label><br/>
                <input type='radio' name={this.props.id}  onClick = {this.props.changeAnswer.bind(this)} id={`b${this.props.id}`} value='b'/><label htmlFor={`b${this.props.id}`}>B. {this.props.b}</label><br/>
                <input type='radio' name={this.props.id}  onClick = {this.props.changeAnswer.bind(this)} id={`c${this.props.id}`} value='c'/><label htmlFor={`c${this.props.id}`}>C. {this.props.c}</label><br/>
                <input type='radio' name={this.props.id}  onClick = {this.props.changeAnswer.bind(this)} id={`d${this.props.id}`} value='d'/><label htmlFor={`d${this.props.id}`}>D. {this.props.d}</label><br/>
            </li>
        )
    }
    
}

const mapStateToProps = (state) => {
    console.log('Question State Mount', state)
    return  {
        answers: state.answers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeAnswer: (e) => {
            const action = {
            type: 'CHANGE_ANSWER',
            answer: e.target.value,
            i: e.target.name
            }
            dispatch (action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)