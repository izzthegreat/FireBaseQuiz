import React, {useState,useRef} from 'react'
import { connect } from 'react-redux'
import '../css/quiz.css'


function QuestionEdit (props) {

    const [ask, setAsk] = useState(props.ask)
    const [a,setA] = useState(props.a)
    const [b,setB] = useState(props.b)
    const [c,setC] = useState(props.c)
    const [d,setD] = useState(props.d)
    const [correct,setCorrect] = useState(props.correct)
    const [edit,setEdit] = useState(false)
    window[`form${props.id}`] = useRef()

    function getEdit() {
        let update = {
            ask: ask,
            a: a,
            b: b,
            c: c,
            d: d,
            correct: correct,
            id: props.id
        }
        console.log (update)
        props.saveQuestion(update)
        props.updateQuiz()
        
    }

    let question

    if (edit===true) {
        question = 
            <div>
                <form id={`form${props.id}`} ref={window[`form${props.id}`]} method='POST' onSubmit={(e) => getEdit(e)}>
                Question:<input type='text' name='ask' onChange={(e)=>setAsk(e.target.value)} defaultValue={ask}/><br/>
                A:<input type='text' name={`a${props.id}`} onChange={(e)=>setA(e.target.value)} defaultValue={a}/><br/>
                B:<input type='text' name={`b${props.id}`} onChange={(e)=>setB(e.target.value)} defaultValue={b}/><br/>
                C:<input type='text' name={`c${props.id}`} onChange={(e)=>setC(e.target.value)} defaultValue={c}/><br/>
                D:<input type='text' name= {`d${props.id}`} onChange={(e)=>setD(e.target.value)} defaultValue={d}/><br/>
                Correct Answer?<select name={`correct${props.id}`} onChange={(e)=>setCorrect(e.target.value)} defaultValue={correct}>
                    <option value='a'>A</option>
                    <option value='b'>B</option>
                    <option value='c'>C</option>
                    <option value='d'>D</option>
                </select><br/><br/>
                <input type='button' value='Save' readOnly form={`form${props.id}`} onClick={()=>{setEdit(false);getEdit()}} />
                </form>
            </div>
    } else { 
        question = 
            <div>
                {ask}<br/>
                <input type='radio' name={props.id}  onClick = {props.changeAnswer} id={`a${props.id}`} value='a'/><label htmlFor={`a${props.id}`}>A. {a}</label><br/>
                <input type='radio' name={props.id}  onClick = {props.changeAnswer} id={`b${props.id}`} value='b'/><label htmlFor={`b${props.id}`}>B. {b}</label><br/>
                <input type='radio' name={props.id}  onClick = {props.changeAnswer} id={`c${props.id}`} value='c'/><label htmlFor={`c${props.id}`}>C. {c}</label><br/>
                <input type='radio' name={props.id}  onClick = {props.changeAnswer} id={`d${props.id}`} value='d'/><label htmlFor={`d${props.id}`}>D. {d}</label><br/>
                <div>
                    <input type='button' value='Edit' readOnly onClick={()=>setEdit(true)}/>
                </div>
            </div>
    }

    return(
        <li>
            {question}
        </li>
    )
}



const mapStateToProps = (state) => {
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
        },
        saveQuestion: (question) => {
            const action = {
            type: 'SAVE_EDIT',
            update: question,
            i: question.id
            }
            dispatch (action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEdit)