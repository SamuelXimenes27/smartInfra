import { Button } from '@mui/material'
import React, { useState } from 'react'

const CustomButton = (props) => {
    const styles = {
        height: 40, width: 130, borderRadius: 2, backgroundColor: '#2148C0',
    }

    const [defaultStyle, setDefaultStyle] = useState(props.defaultStyle);

    return (
        <Button
            size="small"
            variant="contained"
            sx={defaultStyle ? styles : props.styles}
            onClick={props.onClick}>
            {props.icon}
            {props.text}
        </Button>
    )
}

export default CustomButton