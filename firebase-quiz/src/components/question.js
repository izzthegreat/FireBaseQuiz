import React from 'react'
import { connect } from 'react-redux'
import '../css/quiz.css'


function Question (props) {
    return(
        <li>
            {props.question}<br/>
            <input type='radio' name={props.id}  onClick = {props.changeAnswer.bind(this)} id={`a${props.id}`} value='a'/><label htmlFor={`a${props.id}`}>A. {props.a}</label><br/>
            <input type='radio' name={props.id}  onClick = {props.changeAnswer.bind(this)} id={`b${props.id}`} value='b'/><label htmlFor={`b${props.id}`}>B. {props.b}</label><br/>
            <input type='radio' name={props.id}  onClick = {props.changeAnswer.bind(this)} id={`c${props.id}`} value='c'/><label htmlFor={`c${props.id}`}>C. {props.c}</label><br/>
            <input type='radio' name={props.id}  onClick = {props.changeAnswer.bind(this)} id={`d${props.id}`} value='d'/><label htmlFor={`d${props.id}`}>D. {props.d}</label><br/>
        </li>
    )
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