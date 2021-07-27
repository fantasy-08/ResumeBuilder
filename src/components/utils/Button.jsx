import * as React from 'react';
import Button from '@material-ui/core/Button';

export default function IconLabelButtons({ label, handleClick, endIcon }) {
    return (
        <>
            {
                endIcon
                    ?
                    <Button variant="contained" endIcon={endIcon} onClick={handleClick} >
                        {label}
                    </Button >
                    :
                    <Button variant="contained" onClick={handleClick}>
                        {label}
                    </Button>
            }
        </>
    );
}
