import React from 'react'
import Heading from '../../components/utils/PagesHeading'
import ToolTip from '../../components/utils/ToolTip'
import { Container, Grid } from '@material-ui/core';
import { ADD_METADATA } from '../../reducer/constants'

import { MetaDataContext } from '../../App';

import EducationComponent from '../../components/steps/EducationComponent';

const writing_tips = [
    'If you have still not graduated, list the date you expect to graduate.',
    'High school graduation shouldn’t be mentioned on your resume unless you haven’t gone to college.',
    'Start off by listing your degrees from most recent to oldest.',
    'Mention any scholarships, honors, awards, and professional certifications you have earned.'
]

function Education() {
    const { resumeState, resumeDispatch } = React.useContext(MetaDataContext)

    return (
        <Container>
            <Grid container>
                <Grid item xs={8}>
                    <Heading heading="Educational Details" information="Add information about your educational background." />
                </Grid>
                <Grid item xs={4}>
                    <ToolTip heading="Expert tips for you" text={writing_tips} buttonName="tips" />
                </Grid>
            </Grid>

            <br />

            <EducationComponent/>
        </Container>
    )
}

export default Education
