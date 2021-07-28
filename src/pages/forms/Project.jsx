import React from 'react'

import Heading from '../../components/utils/PagesHeading'
import ToolTip from '../../components/utils/ToolTip'

import { Container, Grid, Typography } from '@material-ui/core';
import { ADD_METADATA } from '../../reducer/constants'

import { MetaDataContext } from '../../App';

import ProjectComponent from '../../components/steps/ProjectComponent';
import ProjectDisplay from '../../components/steps/ProjectDisplay';

const writing_tips = [
    'Your most recent projects.',
    'Projects should reflect your skills and command on topic.',
    'Use bullet points to list your project responsibilities in short, direct sentences.',
    'Don\'t forget to mention tech stack which were used by you in the project.'
]

function Project() {
    const { resumeState, resumeDispatch } = React.useContext(MetaDataContext)
    const addNewProject = (project) => {
        let new_project_metadata = resumeState['Project']
        new_project_metadata.push(project)
        resumeDispatch({
            type: ADD_METADATA, payload: {
                heading: 'Project',
                metadata: new_project_metadata
            }
        })
    }

    const removeProject = (index) => {
        let new_project_metadata = resumeState['Project']
        new_project_metadata.splice(index, 1)
        resumeDispatch({
            type: ADD_METADATA, payload: {
                heading: 'Project',
                metadata: new_project_metadata
            }
        })
    }
    return (
        <Container>
            <Grid container>
                <Grid item xs={8}>
                    <Heading heading="Project" information="List your coolest and best projects to showcase your skills." />
                </Grid>
                <Grid item xs={4}>
                    <ToolTip heading="Expert tips for you 🚧" text={writing_tips} buttonName="tips" />
                </Grid>
            </Grid>

            <br />
            {
                resumeState.Project.length ?
                    <Typography align="center" variant="body1" display="block" gutterBottom>Your <b>Projects</b></Typography> :
                    <></>
            }
            {
                resumeState.Project.map((project, index) => {
                    return <ProjectDisplay metaData={project} index={index} handleRemove={removeProject} />
                })
            }
            {
                resumeState.Project.length ? <><br /><br /></> : <></>
            }
            <Typography align="center" variant="body1" display="block" gutterBottom>Add new <b>Project</b></Typography>
            <ProjectComponent handleAdd={addNewProject} />
            <br />
        </Container>
    )
}

export default Project
