import React from 'react'
import { Grid} from '@material-ui/core'
import Button from '../utils/Button';
import { useHistory } from "react-router-dom";

function Navbar() {
    const history = useHistory();
    const handleBuild = () => {
        history.push('/template')
    }
    return (
        <>
            <Grid
                container direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
                spacing={1}
            >
                <Grid item xs={5}>
                    <div style={{ height: '2.2rem', width: '9rem', margin: 0, marginLeft: '2rem',cursor:'pointer' }} onClick={() => {
                        history.push('/ResumeBuilder')
                    }}>
                        <img src='logo.svg' />
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        label="Build resume"
                        size='small'
                        color="warning"
                        sx={{
                            mt: 1,
                            backgroundColor: "#fe8c26"
                        }}
                        handleClick={ handleBuild }
                    />
                    
                </Grid>
                <Grid item xs={12}>
                    <hr/>
                </Grid>
            </Grid>
        </>
    )
}

export default Navbar
