import React from 'react'

import Heading from '../../components/utils/PagesHeading'
import ToolTip from '../../components/utils/ToolTip'
import TextEditor from '../../components/utils/Editor'

import { Container, Grid, Typography } from '@material-ui/core';
import { ADD_METADATA } from '../../reducer/constants'

import { MetaDataContext } from '../../App';

const writing_tips = [
    'Keep your summary short and straight to the point. You can always elaborate during the interview. The optimal length for a professional summary is between 50 and 100 words.   ',
    'Tailor the summary to the job you are applying for. Show the employer exactly why you’re the best fit for this position.',
    'Be specific about your background, skills and goals.',
    'Remember, the best resume summary should quickly grab recruiters’ attention by shouting out: “Hey, I’m who you are looking for!”'
]

function ScholaristicAchievement() {
    const {  resumeDispatch } = React.useContext(MetaDataContext)
    const addNewExperience = (skill) => {
        let new_skill_metadata = skill
        resumeDispatch({
            type: ADD_METADATA,
            payload: {
                heading: 'Skill',
                metadata: new_skill_metadata
            }
        })
    }

    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Heading heading="Scholaristic Achievement" information="Highlight your top achivement relevant to job profile." />
                </Grid>
                <Grid item xs={4}>
                    <ToolTip heading="Expert tips for you 🏆" text={writing_tips} buttonName="tips" />
                </Grid>
                <Grid item xs={12}>
                    <TextEditor onChange={addNewExperience} label='Add your Scholaristic Achievement (express in points for easy readibility)'/>
                </Grid>
            </Grid>

        </Container>
    )
}

export default ScholaristicAchievement
