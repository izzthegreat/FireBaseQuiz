import { createStore } from 'redux'

const initialState = {
    quiz: [{}],
    answers: [],
    quizName: 'My First Quiz',
    score: 0
}

const reducer = (state = initialState, action) => {
    console.log('reducer', action)
    switch(action.type) {
        case 'GRADE_QUIZ':
            return Object.assign({},state,state.score = action.score)
        case 'CHANGE_ANSWER':
            return Object.assign({},state,state.answers[action.i] = (action.answer))
        case 'TEST':
            console.log('TEST',state)
            return state
        default: 
            return state
    }
}

const store = createStore(reducer)

export default store