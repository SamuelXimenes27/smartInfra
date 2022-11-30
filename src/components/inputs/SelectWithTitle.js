import { Box, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'


const SelectWithTitle = (props) => {
    return (
        <Box>
            <div>
                <Typography sx={{ ml: 0.5, fontSize: 14 }}>{props.title}</Typography>
                <Select
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ width: 140 }}
                >
                    <MenuItem value={10}>Samuel Ximenes</MenuItem>
                    <MenuItem value={20}>Hamon Ravick</MenuItem>
                    <MenuItem value={30}>Italo Maciel</MenuItem>
                </Select>
            </div>
        </Box>
    )
}

export default SelectWithTitle