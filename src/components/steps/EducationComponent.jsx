import React from 'react'
//Material
import { Typography, Grid } from '@material-ui/core';
//util
import TextField from '../utils/TextField'
import DropDown from '../utils/DropDown'


const degreeOptions = [
    'High School Diploma',
    'GED',
    'Associate of Arts',
    'Associate of Science',
    'Associate of Applied Science',
    'Bachelor of Arts',
    'Bachelor of Science',
    'BBA',
    'Master of Arts',
    'Master of Science',
    'Ph.D.',
    'Custom Degree'
]

function EducationComponent() {
    const [metaData, setMetaData] = React.useState({
        college: '',
        degree: '',
        field: '',
        date: '',
        grade: ''
    })
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
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        handleChange={handleChange}
                        label='School/College/University'
                        name='college'
                        value={metaData['college']}
                    />
                </Grid>
                <Grid item xs={6}>
                    <DropDown
                        handleChange={handleChange}
                        label='Select a degree'
                        name='degree'
                        handleDropdownChange={handleDropdownChange}
                        value={metaData['degree']}
                        options={degreeOptions}
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
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Graduation Date (Eg: July 2020)'
                        name='date'
                        value={metaData['date']}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        handleChange={handleChange}
                        label='Grade'
                        name='grade'
                        value={metaData['grade']}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default EducationComponent
