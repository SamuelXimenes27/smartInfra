import React, { useState } from "react";


import { IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Divider, Box, TextField, FormControl } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { useFetch } from '../../hooks/useFetch';
import CustomButton from '../../components/buttons/Button';
import CloseIcon from '@mui/icons-material/Close';

import data from '../../data/db.json'
import { useMemo } from 'react';
import axios from 'axios';

const url = "http://localhost:3000/comissions_values";

let PageSize = 4;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
};


const Configurations = () => {
    // const { data: items, loading, error } = useFetch(url);

    const [valueToEdit, setValueToEdit] = useState("");
    const [idToEdit, setIdToEdit] = useState("");
    const [nameComission, setNameComission] = useState("");

    const [open, setOpen] = React.useState(false);

    // const editValueInJSON = async (e) => {
    //     // Faz a chamada HTTP para obter o JSON do servidor
    //     const response = await axios.get(`http://localhost:3000/comissions_values/${idToEdit}`);
    //     const item = response.data;

    //     // Edita o valor no objeto JSON
    //     item.value = valueToEdit;

    //     // Faz a chamada HTTP de atualização para enviar o objeto JSON atualizado de volta para o servidor
    //     await axios.patch(`http://localhost:3000/comissions_values/${idToEdit}`, item);
    // }


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        console.log(currentPage);
        return data['comissions_values'].slice(firstPageIndex, lastPageIndex);

    }, [currentPage]);


    return (
        <>
            <Box
                sx={{ maxWidth: 900, height: 800, display: 'flex', justifyContent: 'start', mt: 5, ml: 45, flexDirection: 'column' }}>
                <Typography sx={{ fontSize: 26, mb: 2 }}>Configurações</Typography>
                <Paper sx={{ width: 900, height: 600 }}>
                    <TableContainer>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold', mb: 3, textAlign: "center" }}>Valores Comissão</Typography>
                        <Table>
                            {/* {loading && <Typography>Carregando dados...</Typography>} */}
                            {/* {error && <Typography>{error}</Typography>} */}
                            <TableHead sx={{ minWidth: 650 }} >
                                <TableRow align="center">
                                    <TableCell align="center">Lançamento</TableCell>
                                    <TableCell align="center">Caixa de Emenda</TableCell>
                                    <TableCell align="center">Raquete</TableCell>
                                    <TableCell align="center">SLA Ativo</TableCell>
                                    <TableCell align="center">Acionamento Semana</TableCell>
                                    <TableCell align="center">Acionamento FDS</TableCell>
                                    <TableCell align="center">Plantão</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    {/* With node server on */}
                                    {/* {items && items.map((comissions) => (
                                        <TableCell
                                            align="center"
                                            sx={{ fontWeight: 'bold' }}
                                            key={comissions.id}> R${comissions.value}
                                            {<IconButton onClick={() => {
                                                console.log(comissions);
                                                handleOpen();
                                                setNameComission(comissions.name);
                                                console.log(nameComission);
                                                setIdToEdit(comissions.id);
                                                console.log(idToEdit);
                                            }}><EditIcon /></IconButton>}
                                        </TableCell>
                                    ))} */}
                                    {currentTableData && currentTableData.map(item => {
                                        return <>
                                            <TableCell
                                                align="center"
                                                sx={{ fontWeight: 'bold' }}
                                                key={item.id}> R${item.value}
                                                {<IconButton onClick={() => {
                                                    console.log(item);
                                                    handleOpen();
                                                    setNameComission(item.name);
                                                    console.log(nameComission);
                                                    setIdToEdit(item.id);
                                                    console.log(idToEdit);
                                                }}><EditIcon /></IconButton>}
                                            </TableCell>
                                        </>

                                    })}

                                </TableRow>
                            </TableBody>
                        </Table>

                    </TableContainer>
                </Paper>
            </Box >

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                            Editar Valor da Comissão - {nameComission}
                        </Typography>
                        <IconButton onClick={handleClose} sx={{ mb: 2 }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Divider></Divider>
                    <form onSubmit={/*editValueInJSON*/ null}>
                        <FormControl>
                            <TextField sx={{ mt: 5, ml: 2 }} value={valueToEdit} onChange={(e) => setValueToEdit(e.target.value)} placeholder='Digite um novo valor' type='text' required />
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                position: "fixed",
                                bottom: 15,
                                ml: 20,
                            }}>
                                <CustomButton onClick={handleClose} text='Cancelar' defaultStyle={true} />
                                <CustomButton type="submit" text='Confirmar' defaultStyle={true} />
                            </Box>
                        </FormControl>
                    </form>

                </Box>
            </Modal>
        </>
    )
}

export default Configurations