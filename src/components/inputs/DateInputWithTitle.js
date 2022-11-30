import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const DateInputWithTitle = (props) => {
    return (
        <Box>
            <Typography sx={{ ml: 0.5, fontSize: 14 }}>{props.title}</Typography>
            <TextField
                id="datetime-local"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                sx={{ width: 140 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Box>
    )
}

export default DateInputWithTitle