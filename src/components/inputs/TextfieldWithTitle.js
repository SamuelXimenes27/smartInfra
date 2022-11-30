import { TextField, Typography } from '@mui/material'
import React from 'react'

const TextfieldWithTitle = (props) => {
    return (
        <div>
            <Typography sx={{ ml: 0.5, fontSize: 14 }}>{props.title}</Typography>
            <TextField sx={{ width: 140 }} />
        </div>
    )
}

export default TextfieldWithTitle