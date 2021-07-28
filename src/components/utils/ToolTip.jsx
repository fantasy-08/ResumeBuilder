import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip, { tooltipClasses } from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

function ToolTip({ heading, text, buttonName }) {

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }));

    return (
        <>
            <HtmlTooltip
                title={
                    <React.Fragment>
                        <Typography align="center" color="inherit">{heading}</Typography>
                        {
                                text.map(msg => {
                                    return <Typography variant="caption" display="block"  color="inherit">✔️ { msg }</Typography>
                            })
                        }
                    </React.Fragment>
                }
            >
                <Button size="small" sx={{ml:10,mt:2}} endIcon={<EmojiObjectsIcon/>}>{buttonName}</Button>
            </HtmlTooltip>
        </>
    )
}

export default ToolTip
