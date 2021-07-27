import * as React from 'react';
import Button from '@material-ui/core/Button';

export default function IconLabelButtons({ label, handleClick, endIcon, ...params }) {
    return (
        <>
            {
                endIcon
                    ?
                    <Button variant="outlined" endIcon={endIcon} onClick={handleClick} {...params}>
                        {label}
                    </Button >
                    :
                    <Button variant="outlined" onClick={handleClick} {...params}>
                        {label}
                    </Button>
            }
        </>
    );
}
