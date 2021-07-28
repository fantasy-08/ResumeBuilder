import React from 'react'
import { Grid, Typography } from '@material-ui/core'
//context
import { MetaDataContext } from '../../App';
import Table from '../../components/utils/Table'

const SectionDivider = ({ topic }) => {
    const sectionStyle = {
        width: '100%',
        background: 'lightgrey'
    }
    return (
        <>
            <br />
            <div style={sectionStyle}>
                <Typography variant='subtitle1' style={{ marginLeft: '1rem' }}><b>{topic}</b></Typography>
            </div>
        </>
    )
}

function MNITresume() {
    const { resumeState } = React.useContext(MetaDataContext)

    const A4 = {
        height: '842px',
        width: '595px',
        /* to centre page on screen*/
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '.01rem solid grey',
        padding: '2rem'
    }

    const generateRows = () => {
        const rows = []
        resumeState['Education'].forEach((education) => {
            const temp = []
            temp.push(education['degree'])
            temp.push(education['college'])
            temp.push(education['date'])
            temp.push(education['grade'])

            rows.push(temp)
        })
        return rows
    }

    return (
        <div style={A4}>
            <Grid container>
                <Grid item xs={3}>
                    <img
                        src='MNITLOGO.png'
                        width="135rem"
                        height="135rem"
                    />
                </Grid>
                <Grid item xs={6}>
                    {resumeState['Personal Info']['fname'] === '' ? <></> : <Typography variant='h5'><b>{`${resumeState['Personal Info']['fname']} ${resumeState['Personal Info']['lname']}`}</b></Typography>}
                    {resumeState['Personal Info']['branch'] === '' ? <></> : <Typography variant='body2'><b>Branch:</b>{` ${resumeState['Personal Info']['branch']}`}</Typography>}
                    {resumeState['Personal Info']['college'] === '' ? <></> : <Typography variant='body2'><b>{` ${resumeState['Personal Info']['college']}`}</b></Typography>}
                    {resumeState['Personal Info']['email'] === '' ? <></> : <Typography variant='body2'><b>Email:</b>{` ${resumeState['Personal Info']['email']}`}</Typography>}
                    {resumeState['Personal Info']['city'] === '' ? <></> : <Typography variant='body2'><b>{` ${resumeState['Personal Info']['city']}, ${resumeState['Personal Info']['state']} (${resumeState['Personal Info']['zip']})`}</b></Typography>}
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            {resumeState['Personal Info']['linkedin'] === '' ? <></> : <a href={`${resumeState['Personal Info']['linkedin']}`}><Typography variant='body2'><b>LinkedIn</b></Typography></a>}
                        </Grid>
                        <Grid item xs={4}>
                            {resumeState['Personal Info']['github'] === '' ? <></> : <a href={`${resumeState['Personal Info']['github']}`}><Typography variant='body2'><b>GitHub</b></Typography></a>}
                        </Grid>
                        <Grid item xs={4}>
                            {resumeState['Personal Info']['personal'] === '' ? <></> : <a href={`${resumeState['Personal Info']['personal']}`}><Typography variant='body2'><b>Portfolio</b></Typography></a>}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item xs={12}>{resumeState['Personal Info']['stream'] === '' ? <></> : <Typography variant='body2'><b>{` ${resumeState['Personal Info']['stream']}`}</b></Typography>}</Grid>
                        <Grid item xs={12}>{resumeState['Personal Info']['gender'] === '' ? <></> : <Typography variant='body2'><b>{` ${resumeState['Personal Info']['gender']}`}</b></Typography>}</Grid>
                        <Grid item xs={12}>{resumeState['Personal Info']['dob'] === '' ? <></> : <Typography variant='body2'><b>DOB:</b>{` ${resumeState['Personal Info']['dob']}`}</Typography>}</Grid>
                        <Grid item xs={12}>{resumeState['Personal Info']['phone'] === '' ? <></> : <Typography variant='body2'><b>Phone:</b>{` ${resumeState['Personal Info']['phone']}`}</Typography>}</Grid>
                    </Grid>
                </Grid>
            </Grid>
            {
                resumeState['Education'].length ?
                    <>
                        <SectionDivider topic='Education' />
                        <Table column={['Examination', 'University', 'Graduation Date', 'CGPA /%']} rows={generateRows()}/>
                    </> :
                    <></>
            }
            {
                resumeState['Experience'].length ?
                    <>
                        <SectionDivider topic='Experience' />
                        
                    </> :
                    <></>
            }
        </div>
    )
}

export default MNITresume
