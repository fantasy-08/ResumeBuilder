import React from 'react'

import Typography from '@material-ui/core/Typography';

function PagesHeading({ heading, information }) {
    return (
        <div>
            <Typography variant="h6" component="div" gutterBottom>
                Fill Up your <b>{heading}</b>
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {information}
            </Typography>
        </div>
    )
}

export default PagesHeading
