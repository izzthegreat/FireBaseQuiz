import React from 'react'
import { connect } from 'react-redux'
import '../css/quiz.css'


function QuestionEdit (props) {
    return(
        <li>
            <div>
                <form id={`${props.id}`} method='POST'>
                    Question:<input type='text' name='ask' defaultValue={props.ask}/><br/>
                    A:<input type='text' name='a' defaultValue={props.a}/><br/>
                    B:<input type='text' name='b' defaultValue={props.b}/><br/>
                    C:<input type='text' name='c' defaultValue={props.c}/><br/>
                    D:<input type='text' name='d' defaultValue={props.d}/><br/>
                    Correct Answer?<select name='correct' defaultValue={props.correct}>
                        <option value='a'>A</option>
                        <option value='b'>B</option>
                        <option value='c'>C</option>
                        <option value='d'>D</option>
                    </select><br/><br/>
                </form>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEdit)