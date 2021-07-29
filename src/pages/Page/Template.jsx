import React from 'react'
import { Typography, Grid, Container } from '@material-ui/core'
import { templates } from '../../reducer/constants'

import './Template.css'

const ImageHoverZoom = ({ imagePath, name }) => {
    return (
        <div className="zoom">
            <img src={imagePath} alt="" className="hover-zoom" />
            <Typography variant='h6' align="center" sx={{ pt: 0, mt: 0 }} gutterbottom>
                {name}
            </Typography>
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
                            <Grid item xs={4} md={4}>
                                <ImageHoverZoom imagePath={`/template/${template}.JPG`} name={template} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default Template
