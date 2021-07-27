import { ADD_STEP, UPDATE_STATUS,RESET } from '../../reducer/constants'

export
    function next(stepsDispatch, metaData) {
    metaData.completed=true
    stepsDispatch({
        type: UPDATE_STATUS, payload: metaData
    })
}

export
    function skip(stepsDispatch, metaData) {
    metaData.skipped=true
    stepsDispatch({
        type: UPDATE_STATUS, payload: metaData
    })
}

export
    function back(stepsDispatch, metaData) {
    metaData.completed=false
    stepsDispatch({
        type: UPDATE_STATUS, payload: metaData
    })
}

export
function addStep(stepsDispatch, metaData) {
    stepsDispatch({
        type: ADD_STEP, payload: metaData
    })
}

export
function reset(stepsDispatch) {
    stepsDispatch({
        type: RESET
    })
}