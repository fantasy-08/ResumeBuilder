import React from 'react'
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function DropDown({ handleDropdownChange, label, name, value, options }) {
    const handleChange = (event) => {
        handleDropdownChange(name, event.target.value)
    };
    return (
        <>
            <Typography variant="subtitle1" display="block" gutterBottom>{label}</Typography>
            <FormControl fullWidth>
                <Select
                    value={value}
                    placeholder={label}
                    onChange={handleChange}
                    size="small"
                >
                    {
                        options.map(option => {
                            return <MenuItem value={option}>{option}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </>
    )
}

export default DropDown
