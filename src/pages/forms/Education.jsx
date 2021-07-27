import React from 'react'

import Heading from '../../components/utils/PagesHeading'
import ToolTip from '../../components/utils/ToolTip'

import { Container, Grid, Typography } from '@material-ui/core';
import { ADD_METADATA } from '../../reducer/constants'

import { MetaDataContext } from '../../App';

import EducationComponent from '../../components/steps/EducationComponent';
import EducationDisplay from '../../components/steps/EducationDisplay';

const writing_tips = [
    'If you have still not graduated, list the date you expect to graduate.',
    'High school graduation shouldn’t be mentioned on your resume unless you haven’t gone to college.',
    'Start off by listing your degrees from most recent to oldest.',
    'Mention any scholarships, honors, awards, and professional certifications you have earned.'
]

function Education() {
    const { resumeState, resumeDispatch } = React.useContext(MetaDataContext)
    const addNewEducation = (education) => {
        let new_education_metadata = resumeState['Education']
        new_education_metadata.push(education)
        resumeDispatch({
            type: ADD_METADATA, payload: {
                heading: 'Education',
                metadata: new_education_metadata
            }
        })
    }
    const removeEducation = (index) => {
        let new_education_metadata = resumeState['Education']
        new_education_metadata.splice(index, 1)
        resumeDispatch({
            type: ADD_METADATA, payload: {
                heading: 'Education',
                metadata: new_education_metadata
            }
        })
    }
    return (
        <Container>
            <Grid container>
                <Grid item xs={8}>
                    <Heading heading="Educational Details" information="Add information about your educational background." />
                </Grid>
                <Grid item xs={4}>
                    <ToolTip heading="Expert tips for you 🏫" text={writing_tips} buttonName="tips" />
                </Grid>
            </Grid>

            <br />
            {
                resumeState.Education.length ?
                    <Typography align="center" variant="body1" display="block" gutterBottom>Your <b>Education</b> Details</Typography> :
                    <></>
            }
            {
                resumeState.Education.map((education, index) => {
                    return <EducationDisplay metaData={education} index={index} handleRemove={removeEducation} />
                })
            }
            {
                resumeState.Education.length ? <><br /><br /></> : <></>
            }
            <Typography align="center" variant="body1" display="block" gutterBottom>Add new <b>Education</b> Detail</Typography>
            <EducationComponent handleAdd={addNewEducation} />
            <br />
        </Container>
    )
}

export default Education
