import { Checkbox, FormControl, InputBase, InputLabel, MenuItem, Select, styled, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CheckboxWithTitle from '../inputs/CheckboxWithTitle';
import DateInputWithTitle from '../inputs/DateInputWithTitle';
import NumberWithTitle from '../inputs/NumberWithTitle';
import SelectWithTitle from '../inputs/SelectWithTitle';
import TextfieldWithTitle from '../inputs/TextfieldWithTitle';




const FormOS = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <SelectWithTitle title='Técnico' />
            {/* <TextfieldWithTitle title='Inicio do Serviço' /> */}
            <DateInputWithTitle title='Inicio do Serviço' />
            <DateInputWithTitle title='Fim do Serviço' />
            <SelectWithTitle title='Serviço Realizado' />
            <NumberWithTitle title='Quantidade' />
            <SelectWithTitle title='Acionamento' />
            <TextfieldWithTitle title='Comissão' />
            <CheckboxWithTitle title='SLA' />
        </Box>
    )
}

export default FormOS