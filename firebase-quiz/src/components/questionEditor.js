import React, {useState} from 'react'
import { connect } from 'react-redux'

function QuestionEdit (props) {

    const [ask, setAsk] = useState(props.ask)
    const [a,setA] = useState(props.a)
    const [b,setB] = useState(props.b)
    const [c,setC] = useState(props.c)
    const [d,setD] = useState(props.d)
    const [correct,setCorrect] = useState(props.correct)
    const [edit,setEdit] = useState(false)

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
        props.updateQuiz(update)  
    }

    let question

    if (edit === true) {
        question = 
            <div className='question'>
                <form id={`form${props.id}`}  method='POST' onSubmit={getEdit}>
                Question:<input className='inname' type='text' name='ask' onChange={(e)=>setAsk(e.target.value)} defaultValue={ask}/><br/>
                A:<input className='inname' type='text' name={`a${props.id}`} onChange={(e)=>setA(e.target.value)} defaultValue={a}/><br/>
                B:<input className='inname' type='text' name={`b${props.id}`} onChange={(e)=>setB(e.target.value)} defaultValue={b}/><br/>
                C:<input className='inname' type='text' name={`c${props.id}`} onChange={(e)=>setC(e.target.value)} defaultValue={c}/><br/>
                D:<input className='inname' type='text' name= {`d${props.id}`} onChange={(e)=>setD(e.target.value)} defaultValue={d}/><br/>
                Correct Answer?<select className='inname' name={`correct${props.id}`} onChange={(e)=>setCorrect(e.target.value)} defaultValue={correct}>
                    <option className='inname' value='a'>A</option>
                    <option className='inname' value='b'>B</option>
                    <option className='inname' value='c'>C</option>
                    <option className='inname' value='d'>D</option>
                </select><br/><br/>
                <input className='btn info-btn inname' type='button' value='Save' readOnly form={`form${props.id}`} onClick={()=>{setEdit(false);getEdit()}} />
                </form>
            </div>
    } else { 
        question = 
            <div>
                <span className='question'>{ask}</span><br/>
                <input type='radio' name={props.id}  onClick = {props.changeAnswer} id={`a${props.id}`} value='a'/><label className='answers' htmlFor={`a${props.id}`}>A. {a}</label><br/>
                <input type='radio' name={props.id}  onClick = {props.changeAnswer} id={`b${props.id}`} value='b'/><label className='answers' htmlFor={`b${props.id}`}>B. {b}</label><br/>
                <input type='radio' name={props.id}  onClick = {props.changeAnswer} id={`c${props.id}`} value='c'/><label className='answers' htmlFor={`c${props.id}`}>C. {c}</label><br/>
                <input type='radio' name={props.id}  onClick = {props.changeAnswer} id={`d${props.id}`} value='d'/><label className='answers' htmlFor={`d${props.id}`}>D. {d}</label><br/>
                <div>
                    <input className='btn info-btn' type='button' value='Edit' readOnly onClick={()=>setEdit(true)}/>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEdit)