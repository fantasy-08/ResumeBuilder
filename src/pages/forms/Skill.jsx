import React from 'react'

import Heading from '../../components/utils/PagesHeading'
import ToolTip from '../../components/utils/ToolTip'
import TextEditor from '../../components/utils/Editor'

import { Container, Grid, Typography } from '@material-ui/core';
import { ADD_METADATA } from '../../reducer/constants'

import { MetaDataContext } from '../../App';

const writing_tips = [
    'List your top skills. The more relevant they are to the job you are applying for, the better.',
    'Use one or two keywords, not complete sentences. For example: "Project Management",  "Online Marketing", "HTML", "SEO", etc.',
    'Make sure to include all important skills for the job you are applying for, even if you are not proficient on some of them.',
    'Keep it short. Try to showcase no more than 8 skills.'
]

function Experience() {
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
                    <Heading heading="SKILLS" information="Highlight 6-8 of your top skills." />
                </Grid>
                <Grid item xs={4}>
                    <ToolTip heading="Expert tips for you 🤹" text={writing_tips} buttonName="tips" />
                </Grid>
                <Grid item xs={12}>
                    <TextEditor onChange={addNewExperience} label='Add your skills as suggested in tips!'/>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Experience
