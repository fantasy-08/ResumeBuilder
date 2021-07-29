import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core'
//context
import { MetaDataContext } from '../../App';
//util
import Table from '../../components/utils/Table'
import Button from '../../components/utils/Button'

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const SectionDivider = ({ topic }) => {
    const sectionStyle = {
        width: '100%',
        height: '3%',
        background: 'lightgrey',
        marginBottom: '0.225rem',
        marginTop: '0.225rem'
    }
    return (
        <>
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
        padding: '2rem',
        marginBottom: '0.625rem'
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
    const _exportPdf = () => {
        const page = document.querySelector("#capture");
        page.style.height = 'auto'
        page.style.border = '0px'
        html2canvas(page).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4', false);
            pdf.addImage(imgData, 'PNG', 0, 0, 600, 0, undefined, false);
            pdf.save("download.pdf");
        });
        page.style.height = '842px'
        page.style.border = '.01rem solid grey'
    }

    React.useEffect(() => {
        if (resumeState['Print'] !== 0)
            _exportPdf();
    },[resumeState['Print']])

    return (
        <>
            <div style={A4} id="capture">
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
                            <Container>
                                <Table column={['Examination', 'University', 'Graduation', 'CGPA /%']} rows={generateRows()} />
                            </Container>
                        </> :
                        <></>
                }
                {
                    resumeState['Experience'].length ?
                        <>
                            <SectionDivider topic='Experience' />
                            <Container>
                                <Grid container>
                                    {
                                        resumeState['Experience'].map((work) => {
                                            return (
                                                <Grid item xs={12}>
                                                    <Grid container>
                                                        <Grid item xs={6}>
                                                            <Typography variant='body2'><b>{work['employer']}</b> | {work['role']}</Typography>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography variant='subtitle2' sx={{ fontSize: 9 }} align="right">
                                                                ( {work['sdate']} - {work['edate']} )
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <div
                                                                dangerouslySetInnerHTML={{ __html: work['description'] }}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Container>
                        </> :
                        <></>
                }
                {
                    resumeState['Project'].length ?
                        <>
                            <SectionDivider topic='Project' />
                            <Container>
                                <Grid container>
                                    {
                                        resumeState['Project'].map((work) => {
                                            return (
                                                <Grid item xs={12}>
                                                    <Grid container>
                                                        <Grid item xs={6}>
                                                            <Typography variant='body2'><b>{work['title']}</b> | {work['stack']} - <a href={work['link']}>GitHub</a></Typography>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography variant='subtitle2' sx={{ fontSize: 9 }} align="right">
                                                                ( {work['date']} )
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <div
                                                                dangerouslySetInnerHTML={{ __html: work['description'] }}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Container>
                        </> :
                        <></>
                }
                {
                    resumeState['Skill'] === '' ? <></> :
                        <>
                            <SectionDivider topic='Technical Skills' />
                            <Container>
                                <div
                                    dangerouslySetInnerHTML={{ __html: resumeState['Skill'] }}
                                />
                            </Container>
                        </>
                }
                {
                    resumeState['Scholaristic Achievement'] === '' ? <></> :
                        <>
                            <SectionDivider topic='Scholaristic Achievement' />
                            <Container>
                                <div
                                    dangerouslySetInnerHTML={{ __html: resumeState['Scholaristic Achievement'] }}
                                />
                            </Container>
                        </>
                }
            </div>
        </>
    )
}

export default MNITresume
