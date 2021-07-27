import { ADD_STEP, UPDATE_STATUS,RESET } from '../../reducer/constants'

export
function next(stepsDispatch,object) {
    stepsDispatch({
        type: UPDATE_STATUS, payload: object
    })
}

export
function skip(stepsDispatch,object) {
    stepsDispatch({
        type: UPDATE_STATUS, payload: object
    })
}

export
function back(stepsDispatch,object) {
    stepsDispatch({
        type: UPDATE_STATUS, payload: object
    })
}

export
function addStep(stepsDispatch, object) {
    stepsDispatch({
        type: ADD_STEP, payload: object
    })
}

export
function reset(stepsDispatch) {
    stepsDispatch({
        type: RESET
    })
}