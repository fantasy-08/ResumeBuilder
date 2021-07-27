import React from 'react'
import { Container } from '@material-ui/core';
import { StepsContext } from '../App';

import PersonalInfo from './PersonalInfo';

function PagesController() {

    const { stepsState } = React.useContext(StepsContext);
    const [currentState, setCurrentState] = React.useState({
        index: 0,
        metadata: {}
    })

    React.useEffect(() => {
        for (let i = stepsState.length - 1; i >= 0; i--){
            let step = stepsState[i]
            if (step.completed) {
                setCurrentState({
                    index: i,
                    metadata:step
                })
                break;
            }
        }
    },[stepsState])

    const PagePicker = () => {
        switch (currentState.metadata.heading) {
            case 'Peronal Info':
                return <PersonalInfo />
            default:
                return 'All Done Generate Resume Now'
        }
    }
    return (
        <Container>
            { PagePicker() }
        </Container>
    )
}

export default PagesController
