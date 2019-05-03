import { createStore } from 'redux'

const initialState = {
    quiz: [{}],
    answers: [],
    score: 0
}

const reducer = (state = initialState, action) => {
    console.log('reducer', action)
    switch(action.type) {
        case 'GRADE_QUIZ':
            return Object.assign({},state)

        case 'CHANGE_ANSWER':
            return Object.assign({},state,state.answers[action.i] = (action.answer))

        default: 
            return state
    }
}

const store = createStore(reducer)

export default store