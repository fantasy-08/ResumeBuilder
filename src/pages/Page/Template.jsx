import React from 'react'
import { useHistory } from "react-router-dom";

import { Typography, Grid, Container } from '@material-ui/core'
import { templates } from '../../reducer/constants'

import { MetaDataContext } from '../../App';
import { ADD_METADATA } from '../../reducer/constants';

import Button from "../../components/utils/Button";
import './Template.css'

const ImageHoverZoom = ({ imagePath, name }) => {
    const {  resumeDispatch } = React.useContext(MetaDataContext)
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
        <div className="zoom">
            <img src={imagePath} alt="" className="hover-zoom" />
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
        </div>
    );
};

function Template() {
    return (
        <Container>
            <Grid container>
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
                                    imagePath={`/template/${template}.JPG`}
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
