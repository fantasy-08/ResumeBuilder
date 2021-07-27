import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { StepsContext } from '../App';

import Button from '../components/utils/Button'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { next, skip, back, reset } from '../components/utils/StepAction'

// Pages in form
import PersonalInfo from './forms/PersonalInfo';
import Education from './forms/Education';
function PagesController() {

    const { stepsState, stepsDispatch } = React.useContext(StepsContext);
    const [currentState, setCurrentState] = React.useState({
        index: 0,
        metadata: stepsState[0]
    })

    React.useEffect(() => {
        let found = false
        for (let i = stepsState.length - 1; i >= 0; i--) {
            let step = stepsState[i]
            if (step.completed) {
                if (i == stepsState.length - 1) {
                    console.log('Done')
                } else {
                    setCurrentState({
                        index: i + 1,
                        metadata: stepsState[i + 1]
                    })
                }
                found = true
                break;
            }
        }

        if (!found) {
            setCurrentState({
                index: 0,
                metadata: stepsState[0]
            })
        }
    }, [stepsState])

    const PagePicker = () => {
        switch (currentState.metadata.heading) {
            case 'Personal Info':
                return <PersonalInfo />
            case 'Education':
                return <Education />
            default:
                return currentState.metadata.heading
        }
    }

    const handleBack = () => {
        if (currentState.index !== 0)
            back(stepsDispatch, stepsState[currentState.index - 1])
        else
            back(stepsDispatch, currentState.metadata)
    }
    const handleNext = () => {
        next(stepsDispatch, currentState.metadata)
    }

    return (
        <Container>
            {PagePicker()}
            <br />
            <Container>
                <Grid container spacing={12} justifyContent="center" alignItems="center">
                    <Grid item xs={6}>
                        <Button
                            label='Back'
                            handleClick={handleBack}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            label='Save and Continue'
                            handleClick={handleNext}
                            endIcon={<NavigateNextIcon />}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default PagesController
