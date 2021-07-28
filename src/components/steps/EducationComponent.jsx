import React from 'react'
//Material
import { Grid } from '@material-ui/core';
//util
import TextField from '../utils/TextField'
import DropDown from '../utils/DropDown'
import OutlineButton from '../utils/OutlineButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';

const degreeOptions = [
    'High School Diploma',
    'GED',
    'Associate of Arts',
    'Associate of Science',
    'Associate of Applied Science',
    'Bachelor of Arts',
    'Bachelor of Science',
    'Bachelor of Technology',
    'BBA',
    'Master of Arts',
    'Master of Science',
    'Ph.D.',
    'Custom Degree'
]

const initialState={
    college: '',
    degree: '',
    field: '',
    date: '',
    grade: ''
}
function EducationComponent({ handleAdd }) {
    const [metaData, setMetaData] = React.useState(initialState)
    const handleChange = (event) => {
        setMetaData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    const handleDropdownChange = (name, value) => {
        setMetaData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleClick = () => {
        handleAdd(metaData)
        setMetaData(initialState)
    }

    return (
        <div style={{border:'.01rem solid grey',borderRadius:'5px',padding:'1rem',marginBottom:'.625rem'}}>
            <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12} md={12}>
                    <TextField
                        handleChange={handleChange}
                        label='School/College/University'
                        name='college'
                        value={metaData['college']}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DropDown
                        label='Select a degree'
                        name='degree'
                        handleDropdownChange={handleDropdownChange}
                        value={metaData['degree']}
                        options={degreeOptions}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Field Of Study'
                        name='field'
                        value={metaData['field']}
                    />
                </Grid>
                <Grid item xs={12} md={5}>
                    <TextField
                        handleChange={handleChange}
                        label='Graduation Date (Eg: July 2020)'
                        name='date'
                        value={metaData['date']}
                    />
                </Grid>
                <Grid item xs={12} md={5}>
                    <TextField
                        handleChange={handleChange}
                        label='Grade'
                        name='grade'
                        value={metaData['grade']}
                    />
                </Grid>
                <Grid item xs={12} md={2} >
                    <OutlineButton label="Add" handleClick={handleClick} endIcon={<AddCircleIcon />} size="large" />
                </Grid>
            </Grid>
        </div>
    )
}

export default EducationComponent
