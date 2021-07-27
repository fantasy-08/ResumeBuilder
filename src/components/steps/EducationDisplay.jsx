import React from 'react'
//Material
import { Grid,Typography } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//util
import TextField from '../utils/TextField'
import OutlineButton from '../utils/OutlineButton'

function EducationDisplay({metaData,index,handleRemove}) {

    const handleChange = (event) => {
        return null
    }
    const handleClick = () => {
        return handleRemove(index)
    }
    
    return (
        <div style={{border:'.01rem solid grey',borderRadius:'5px',padding:'1rem',marginBottom:'.625rem'}}>
            <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12}>
                    <TextField
                        handleChange={handleChange}
                        label='School/College/University'
                        name='college'
                        value={metaData['college']}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Select a degree'
                        name='degree'
                        value={metaData['degree']}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Field Of Study'
                        name='field'
                        value={metaData['field']}
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        handleChange={handleChange}
                        label='Graduation Date (Eg: July 2020)'
                        name='date'
                        value={metaData['date']}
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        handleChange={handleChange}
                        label='Grade'
                        name='grade'
                        value={metaData['grade']}
                    />
                </Grid>
                <Grid item xs={2} >
                    <OutlineButton
                        label="remove"
                        handleClick={handleClick}
                        endIcon={<DeleteForeverIcon />}
                        size="large"
                        style={{ color: 'red', borderColor:'red' }} />
                </Grid>
            </Grid>
            <br/>
        </div>
    )
}

export default EducationDisplay
