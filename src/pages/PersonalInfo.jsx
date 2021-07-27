import React from 'react'
import Heading from '../components/utils/PagesHeading'
import { Container, Grid } from '@material-ui/core';
import { ADD_METADATA } from '../reducer/constants'

import TextField from '../components/utils/TextField';

import { MetaDataContext } from '../App';
function PersonalInfo({ }) {
    const { resumeState, resumeDispatch } = React.useContext(MetaDataContext)

    const handleChange = (event) => {
        const new_personal_info_metadata = resumeState['Personal Info']
        new_personal_info_metadata[event.target.name] = event.target.value
        resumeDispatch({
            type: ADD_METADATA,
            payload: {
                heading: 'Personal Info',
                metadata: new_personal_info_metadata
            }
        })
    }

    return (
        <Container>
            <Heading heading="Personal Information" information="Employers will use this information to contact you." />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='First Name'
                        name='fname'
                        value={resumeState['Personal Info']['fname']}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Last Name'
                        name='lname'
                        value={resumeState['Personal Info']['lname'] ? resumeState['Personal Info']['lname'] : ''}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        handleChange={handleChange}
                        label='Address'
                        name='address'
                        value={resumeState['Personal Info']['address'] ? resumeState['Personal Info']['address'] : ''}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='City'
                        name='city'
                        value={resumeState['Personal Info']['city'] ? resumeState['Personal Info']['city'] : ''}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        handleChange={handleChange}
                        label='ZIP Code'
                        name='zip'
                        value={resumeState['Personal Info']['zip'] ? resumeState['Personal Info']['zip'] : ''}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        handleChange={handleChange}
                        label='Country'
                        name='country'
                        value={resumeState['Personal Info']['country'] ? resumeState['Personal Info']['country'] : ''}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Email Address'
                        name='email'
                        value={resumeState['Personal Info']['email'] ? resumeState['Personal Info']['email'] : ''}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Phone'
                        name='phone'
                        value={resumeState['Personal Info']['phone'] ? resumeState['Personal Info']['phone'] : ''}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default PersonalInfo
