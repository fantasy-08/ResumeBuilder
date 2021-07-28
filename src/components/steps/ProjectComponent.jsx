import React from 'react'
//Material
import { Grid } from '@material-ui/core';
//util
import TextField from '../utils/TextField'
import TextEditor from '../utils/Editor'
import OutlineButton from '../utils/OutlineButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';

const initialState = {
    title: '',
    stack: '',
    date: '',
    link: '',
    description: ''
}
function ProjectComponent({ handleAdd }) {
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
    const handleTextChange = (projectDescription) => {
        setMetaData(prev => {
            return {
                ...prev,
                'description': projectDescription
            }
        })
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
                <Grid item xs={12} md={12}>
                    <TextEditor onChange={handleTextChange} label='Project description' />
                </Grid>
                <Grid item xs={12} md={2} >
                    <OutlineButton label="Add" handleClick={handleClick} endIcon={<AddCircleIcon />} size="large" />
                </Grid>
            </Grid>
        </div>
    )
}

export default ProjectComponent
