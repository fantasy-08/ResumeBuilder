import React from 'react'
//Material
import { Grid, Typography } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//util
import TextField from '../utils/TextField'
import OutlineButton from '../utils/OutlineButton'

function ExperienceDisplay({ metaData, index, handleRemove }) {

    const handleChange = (event) => {
        return null
    }
    const handleClick = () => {
        return handleRemove(index)
    }

    return (
        <div style={{ border: '.01rem solid grey', borderRadius: '5px', padding: '1rem', marginBottom: '.625rem' }}>
            <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Employer'
                        name='employer'
                        value={metaData['employer']}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Job Title'
                        name='role'
                        value={metaData['role']}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Start Date'
                        name='sdate'
                        value={metaData['sdate']}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='End Date'
                        name='edate'
                        value={metaData['edate']}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography >Job description</Typography>
                    <div
                        dangerouslySetInnerHTML={{ __html: metaData['description'] }}
                        style={{
                            border: '.01rem solid grey',
                            borderRadius: '5px',
                            padding: '.5rem',
                            marginTop: '.625rem'
                        }}
                    />
                </Grid>
                <Grid item xs={2} >
                    <OutlineButton
                        label="remove"
                        handleClick={handleClick}
                        endIcon={<DeleteForeverIcon />}
                        size="large"
                        color= 'error'
                    />
                </Grid>
            </Grid>
            <br />
        </div>
    )
}

export default ExperienceDisplay
