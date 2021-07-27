import {ADD_METADATA} from './constants'

const resumeReducer = (state, action) => {
    switch (action.type) {
        case ADD_METADATA:
            return {
                ...state,
                [action.payload.heading] : action.payload.metadata
            }
        default:
            return state
    }
}

export { resumeReducer }