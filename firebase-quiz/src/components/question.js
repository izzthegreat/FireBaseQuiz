import React from 'react'
import { connect } from 'react-redux'

function Question (props) {
    return(
        <li>
            <span className='question'>{props.question}</span><br/>
            <input type='radio' name={props.id}  onClick = {props.changeAnswer} id={`a${props.id}`} value='a'/><label className='answers' htmlFor={`a${props.id}`}>A. {props.a}</label><br/>
            <input type='radio' name={props.id}  onClick = {props.changeAnswer} id={`b${props.id}`} value='b'/><label className='answers' htmlFor={`b${props.id}`}>B. {props.b}</label><br/>
            <input type='radio' name={props.id}  onClick = {props.changeAnswer} id={`c${props.id}`} value='c'/><label className='answers' htmlFor={`c${props.id}`}>C. {props.c}</label><br/>
            <input type='radio' name={props.id}  onClick = {props.changeAnswer} id={`d${props.id}`} value='d'/><label className='answers' htmlFor={`d${props.id}`}>D. {props.d}</label><br/>
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