import { createStore } from 'redux'

const initialState = {
    quiz: [{}],
    answers: [],
    quizName: 'Default',
    score: 0
}

const reducer = (state = initialState, action) => {
    console.log('reducer', action)
    switch(action.type) {
        case 'GRADE_QUIZ':
            return Object.assign({},state,state.score = action.score, state.answers = [])
        case 'CHANGE_ANSWER':
            return Object.assign({},state,state.answers[action.i] = (action.answer))
        case 'NEW_QUIZ':
            return Object.assign({}, state, state.quizName = action.quizName)
        case 'TEST':
            console.log('TEST',state)
            return state
        default: 
            return state
    }
}

const store = createStore(reducer)

export default store