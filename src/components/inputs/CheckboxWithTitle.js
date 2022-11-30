import { Checkbox, Typography } from '@mui/material'
import React from 'react'

const CheckboxWithTitle = (props) => {
    return (
        <div>
            <Typography sx={{ ml: 2, fontSize: 14 }}>{props.title}</Typography>
            <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30, mt: 1, ml: 1 } }} />
        </div>
    )
}

export default CheckboxWithTitle