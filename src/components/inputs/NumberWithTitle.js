import { TextField, Typography } from '@mui/material'
import React from 'react'

const NumberWithTitle = (props) => {
    return (
        <div>
            <Typography sx={{ ml: 0.5, fontSize: 14 }}>{props.title}</Typography>
            <TextField type="number" />
        </div>
    )
}

export default NumberWithTitle