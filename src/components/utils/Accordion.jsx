import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function SimpleAccordion({ titles, descriptions }) {
    return (
        <div>
            {
                titles.map((title, index) => {
                    return (
                        <Accordion sx={{mb:2}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant='h6'>{title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant='body1'>
                                    {descriptions[index]}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    );
}
