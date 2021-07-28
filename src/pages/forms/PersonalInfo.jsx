import React from 'react'
import Heading from '../../components/utils/PagesHeading'
import { Container, Grid, InputAdornment } from '@material-ui/core';
import { ADD_METADATA } from '../../reducer/constants'

import TextField from '../../components/utils/TextField';

import { MetaDataContext } from '../../App';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='First Name'
                        name='fname'
                        value={resumeState['Personal Info']['fname']}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Last Name'
                        name='lname'
                        value={resumeState['Personal Info']['lname'] ? resumeState['Personal Info']['lname'] : ''}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Organisation/College'
                        name='college'
                        value={resumeState['Personal Info']['college'] ? resumeState['Personal Info']['college'] : ''}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField
                        handleChange={handleChange}
                        label='Stream'
                        name='stream'
                        value={resumeState['Personal Info']['stream'] ? resumeState['Personal Info']['stream'] : ''}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField
                        handleChange={handleChange}
                        label='Branch'
                        name='branch'
                        value={resumeState['Personal Info']['branch'] ? resumeState['Personal Info']['branch'] : ''}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='City'
                        name='city'
                        value={resumeState['Personal Info']['city'] ? resumeState['Personal Info']['city'] : ''}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField
                        handleChange={handleChange}
                        label='State'
                        name='state'
                        value={resumeState['Personal Info']['state'] ? resumeState['Personal Info']['state'] : ''}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                <TextField
                        handleChange={handleChange}
                        label='ZIP Code'
                        name='zip'
                        value={resumeState['Personal Info']['zip'] ? resumeState['Personal Info']['zip'] : ''}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Email Address'
                        name='email'
                        value={resumeState['Personal Info']['email'] ? resumeState['Personal Info']['email'] : ''}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Phone'
                        name='phone'
                        value={resumeState['Personal Info']['phone'] ? resumeState['Personal Info']['phone'] : ''}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Gender'
                        name='gender'
                        value={resumeState['Personal Info']['gender'] ? resumeState['Personal Info']['gender'] : ''}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Date Of Birth'
                        name='dob'
                        value={resumeState['Personal Info']['dob'] ? resumeState['Personal Info']['dob'] : ''}
                    />
                </Grid>
                <Grid item xs={12}>
                    <hr/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        handleChange={handleChange}
                        label='LinkedIn'
                        name='linkedin'
                        value={resumeState['Personal Info']['linkedin'] ? resumeState['Personal Info']['linkedin'] : ''}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LinkedInIcon />
                              </InputAdornment>
                            ),
                          }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        handleChange={handleChange}
                        label='GitHub'
                        name='github'
                        value={resumeState['Personal Info']['github'] ? resumeState['Personal Info']['github'] : ''}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <GitHubIcon />
                              </InputAdornment>
                            ),
                          }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        handleChange={handleChange}
                        label='Portfolio'
                        name='personal'
                        value={resumeState['Personal Info']['personal'] ? resumeState['Personal Info']['personal'] : ''}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircleIcon />
                              </InputAdornment>
                            ),
                          }}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default PersonalInfo
