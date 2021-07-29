import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { StepsContext, MetaDataContext } from '../App';
import { ADD_METADATA } from '../reducer/constants'

import Button from '../components/utils/Button'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PrintIcon from '@material-ui/icons/Print';

import { next, skip, back, reset } from '../components/utils/StepAction'

// Pages in form
import PersonalInfo from './forms/PersonalInfo';
import Education from './forms/Education';
import Experience from './forms/Experience';
import ScholaristicAchievement from './forms/ScholaristicAchievement';
import Project from './forms/Project';
import Skill from './forms/Skill';

//resume template
import MNITresume from './templates/MNITresume';

function PagesController() {

    const { stepsState, stepsDispatch } = React.useContext(StepsContext);
    const { resumeState, resumeDispatch } = React.useContext(MetaDataContext)
    const [currentState, setCurrentState] = React.useState({
        index: 0,
        metadata: stepsState[0]
    })

    React.useEffect(() => {
        let found = false
        for (let i = stepsState.length - 1; i >= 0; i--) {
            let step = stepsState[i]
            if (step.completed) {
                if (i === stepsState.length - 1) {
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
            case 'Experience':
                return <Experience />
            case 'Project':
                return <Project />
            case 'Skills':
                return <Skill />
            case 'Scholaristic Achievement':
                return <ScholaristicAchievement />
            case 'Review and Download':
                {
                    switch (resumeState['Template']) {
                        case 'MNITresume':
                            return <MNITresume />
                        default:
                            return resumeState['Template'] + ' not found'
                    }
                }
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
    const handlePrint = () => {
        resumeDispatch({
            type: ADD_METADATA, payload: {
                'heading': 'Print',
                'metadata': resumeState['Print'] + 1
            }
        })
    }

    return (
        <Container>
            {PagePicker()}
            <br />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        {
                            currentState.index === 0 ?
                                <></> :
                                <Button
                                    label='Back'
                                    handleClick={handleBack}
                                    color="warning"
                                    style={{ marginRight: '100%' }}
                                />
                        }
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {
                            currentState.index === stepsState.length - 1 ?
                                <Button
                                    label='Print'
                                    handleClick={handlePrint}
                                    endIcon={<PrintIcon />}
                                    style={{ marginLeft: '90%' }}
                                /> :
                                <Button
                                    label='Save and Continue'
                                    handleClick={handleNext}
                                    endIcon={<NavigateNextIcon />}
                                    color="success"
                                    style={{ marginLeft: '51%' }}
                                />
                        }
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default PagesController
