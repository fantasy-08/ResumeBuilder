import React from 'react'
//Material
import { Grid } from '@material-ui/core';
//util
import TextField from '../utils/TextField'
import TextEditor from '../utils/Editor'
import OutlineButton from '../utils/OutlineButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';

const initialState = {
    employer: '',
    role: '',
    sdate: '',
    edate: '',
    description: ''
}

function ExperienceComponent({ handleAdd }) {
    const [metaData, setMetaData] = React.useState(initialState)
    const handleChange = (event) => {
        setMetaData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    const handleClick = () => {
        handleAdd(metaData)
        setMetaData(initialState)
    }
    const handleTextChange = (jobDescription) => {
        setMetaData(prev => {
            return {
                ...prev,
                'description': jobDescription
            }
        })
    }

    return (
        <div style={{ border: '.01rem solid grey', borderRadius: '5px', padding: '1rem', marginBottom: '.625rem' }}>
            <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Employer'
                        name='employer'
                        value={metaData['employer']}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Job Title'
                        name='role'
                        value={metaData['role']}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Start Date'
                        name='sdate'
                        value={metaData['sdate']}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='End Date'
                        name='edate'
                        value={metaData['edate']}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextEditor onChange={handleTextChange} label='Job description'/>
                </Grid>
                <Grid item xs={12} md={2} >
                    <OutlineButton label="Add" handleClick={handleClick} endIcon={<AddCircleIcon />} size="small" />
                </Grid>
            </Grid>
        </div>
    )
}

export default ExperienceComponent
