import {ADD_STEP,UPDATE_STATUS,RESET} from './constants'

const stepsReducer = (state, action) => {
    switch (action.type) {
        case ADD_STEP:
            return [
                ...state,
                action.payload
            ]
        case UPDATE_STATUS:
            let new_state = []
            state.forEach(step => {
                if (step.heading !== action.payload.heading)
                    new_state.push(state)
                else
                    new_state.push(action.payload)
            })
            return new_state
        case RESET:
            new_state = []
            state.forEach(step => {
                let temp_state = step
                temp_state.completed = false
                if (temp_state.skipped) {
                    temp_state.skipped=false
                }
                new_state.push(temp_state)
            })
            return new_state
        default:
            return state
    }
}

export { stepsReducer }