import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function BasicTextFields({handleChange,label,name,value}) {
  return (
      <>
        <Typography variant="subtitle1" display="block" gutterBottom>{label}</Typography>
        <TextField placeholder={label} variant="outlined" name={name} value={value} fullWidth onChange={handleChange} size="small"/>
    </>
  );
}
