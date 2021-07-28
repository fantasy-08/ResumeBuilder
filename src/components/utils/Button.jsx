import * as React from 'react';
import Button from '@material-ui/core/Button';

export default function IconLabelButtons({ label, handleClick, endIcon, ...params }) {
    return (
        <>
            {
                endIcon
                    ?
                    <Button
                        variant="contained"
                        endIcon={endIcon}
                        onClick={handleClick}
                        {...params}
                        disableElevation={true} >
                        {label}
                    </Button >
                    :
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        {...params}
                        disableElevation={true}>
                        {label}
                    </Button>
            }
        </>
    );
}
