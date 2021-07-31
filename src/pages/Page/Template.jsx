import React from 'react'
import { useHistory } from "react-router-dom";

import { Typography, Grid, Container } from '@material-ui/core'
import { templates } from '../../reducer/constants'

import { MetaDataContext } from '../../App';
import { ADD_METADATA } from '../../reducer/constants';

import Button from "../../components/utils/Button";
import './Template.css'

import logo from '../../images/Component.svg'
import mnitresume from '../../images/MNITresume.png'

const ImageHoverZoom = ({ imagePath, name }) => {
    const { resumeDispatch } = React.useContext(MetaDataContext)
    const history = useHistory();

    const handleClick = () => {
        resumeDispatch({
            type: ADD_METADATA,
            payload: {
                'heading': 'Template',
                'metadata': name
            }
        })
        history.push("/build");
    }
    return (
        <>
            <div className="zoom">
                <img src={imagePath} alt="" className="hover-zoom" style={{marginBottom:'2rem'}} />
            </div>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Typography variant='h6' align="left" sx={{ pt: 0, mt: 0 }} gutterbottom>
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        label="Use this template"
                        color="warning"
                        size="small"
                        sx={{
                            backgroundColor: "#fe8c26",
                        }}
                        handleClick={handleClick}
                    />
                </Grid>
            </Grid>
        </>
    );
};

function Template() {
    return (
        <Container>
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" align="left">
                        <b>
                        Resume Templates for Every Job
                        </b>
                    </Typography>
                    <br />
                    <Typography variant="body1" align="left">
                        Whether you’re looking for something creative and fun or elegant and
                        powerful, we’ve got resume templates that can help you win the job.
                        Once you’ve found your favorite design, use our super simple resume
                        builder to make a standout application quickly and easily.
                    </Typography>
                    <br />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={logo} style={{width:'100%',height:'100%'}}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' align='center'>
                        CHOOSE YOUR <b>RESUME TEMPLATE</b>
                    </Typography>
                    <Typography variant='body2' sx={{ fontSize: 11 }} gutterBottom align='center'>
                        Remember, you can always change your template later on.
                    </Typography>
                </Grid>
                {
                    templates.map((template) => {
                        return (
                            <Grid item xs={4} md={4}
                                className="container">
                                <ImageHoverZoom
                                    imagePath={mnitresume}
                                    name={template}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default Template
