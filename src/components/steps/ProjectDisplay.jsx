import React from 'react'
//Material
import { Grid, Typography } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//util
import TextField from '../utils/TextField'
import OutlineButton from '../utils/OutlineButton'

function ProjectDisplay({ metaData, index, handleRemove }) {

    const handleChange = (event) => {
        return null
    }
    const handleClick = () => {
        return handleRemove(index)
    }

    return (
        <div style={{ border: '.01rem solid grey', borderRadius: '5px', padding: '1rem', marginBottom: '.625rem' }}>
            <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Project Name'
                        name='title'
                        value={metaData['title']}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                        handleChange={handleChange}
                        label='Worked on (date)'
                        name='date'
                        value={metaData['date']}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                        handleChange={handleChange}
                        label='Stack used summary'
                        name='stack'
                        value={metaData['stack']}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                        handleChange={handleChange}
                        label='Project link | Demo'
                        name='link'
                        value={metaData['link']}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography >Project description</Typography>
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
                <Grid item xs={12} md={2} >
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

export default ProjectDisplay
