import React from 'react'

import Heading from '../../components/utils/PagesHeading'
import ToolTip from '../../components/utils/ToolTip'

import { Container, Grid, Typography } from '@material-ui/core';
import { ADD_METADATA } from '../../reducer/constants'

import { MetaDataContext } from '../../App';

import ExperienceComponent from '../../components/steps/ExperienceComponent';
import ExperienceDisplay from '../../components/steps/ExperienceDisplay';

const writing_tips = [
    'Your most recent or current job should be listed first. Then, work in reverse chronological order, from your newest to your oldest jobs.',
    'When describing your job duties, avoid using personal pronouns like “I, ” “me”, "my" etc. ',
    'Use bullet points to list your job responsibilities in short, direct sentences.',
    'Showcase your skills by using strong action verbs (“led,” “organized”, "coordinated"). Use figures to add value when possible. For example: "decreased production costs by 20%"..'
]

function Experience() {
    const { resumeState, resumeDispatch } = React.useContext(MetaDataContext)
    const addNewExperience = (experience) => {
        let new_experience_metadata = resumeState['Experience']
        new_experience_metadata.push(experience)
        resumeDispatch({
            type: ADD_METADATA, payload: {
                heading: 'Experience',
                metadata: new_experience_metadata
            }
        })
    }
    const removeExperience = (index) => {
        let new_experience_metadata = resumeState['Experience']
        new_experience_metadata.splice(index, 1)
        resumeDispatch({
            type: ADD_METADATA, payload: {
                heading: 'Experience',
                metadata: new_experience_metadata
            }
        })
    }
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Heading heading="Experience" information="List your work experience, from the most recent to the oldest. Feel free to use our pre-written examples." />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ToolTip heading="Expert tips for you 👨‍💻" text={writing_tips} buttonName="writing tips" />
                </Grid>
            </Grid>

            <br />
            {
                resumeState.Experience.length ?
                    <Typography align="center" variant="body1" display="block" gutterBottom>Your <b>Experience</b> Details</Typography> :
                    <></>
            }
            {
                resumeState.Experience.map((experience, index) => {
                    return <ExperienceDisplay metaData={experience} index={index} handleRemove={removeExperience} />
                })
            }
            {
                resumeState.Experience.length ? <><br /><br /></> : <></>
            }
            <Typography align="center" variant="body1" display="block" gutterBottom>Add new <b>Experience</b></Typography>
            <ExperienceComponent handleAdd={addNewExperience} />
            <br />
        </Container>
    )
}

export default Experience
