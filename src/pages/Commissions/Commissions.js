import React, { useState } from "react";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box } from '@mui/material'

import { useFetch } from '../../hooks/useFetch';
import { useMemo } from 'react';
import data from '../../data/db.json'

const url = "http://localhost:3000/tecnicos";

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

const Commissions = () => {
    // const { data: items, loading, error } = useFetch(url);

    const [valueToEdit, setValueToEdit] = useState("");
    const [idToEdit, setIdToEdit] = useState("");
    const [nameComission, setNameComission] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        console.log(currentPage);
        return data['tecnicos'].slice(firstPageIndex, lastPageIndex);

    }, [currentPage]);


    return (
        <Box
            sx={{ maxWidth: 900, height: 800, display: 'flex', justifyContent: 'start', mt: 5, ml: 45, flexDirection: 'column' }}>
            <Typography sx={{ fontSize: 26, mb: 2 }}>Comissões</Typography>
            <Paper sx={{ width: 900, height: 600 }}>
                <TableContainer>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold', mb: 1.5, textAlign: "center" }}>Resultados da Equipe Técnica</Typography>
                    <Table>
                        {/* {loading && <Typography>Carregando dados...</Typography>} */}
                        {/* {error && <Typography>{error}</Typography>} */}
                        <TableHead sx={{ minWidth: 650 }} >
                            <TableRow align="center">
                                <TableCell align="center">Técnico</TableCell>
                                <TableCell align="center">Ordens de Serviço</TableCell>
                                <TableCell align="center">Comissão</TableCell>
                                <TableCell align="center">Acionamentos</TableCell>
                                <TableCell align="center">Plantões</TableCell>
                                <TableCell align="center">A Pagar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* With node server on */}
                            {/* {items && items.map((tec) => (
                                <TableRow>
                                    <TableCell align="center">
                                        {tec.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {tec.serviceorders}
                                    </TableCell>
                                    <TableCell align="center">
                                        R${tec.comissions}
                                    </TableCell>
                                    <TableCell align="center">
                                        R${tec.triggereds}
                                    </TableCell>
                                    <TableCell align="center">
                                        R${tec.shifts}
                                    </TableCell>
                                    <TableCell align="center">
                                        R${parseInt(tec.comissions) + parseInt(tec.triggereds) + parseInt(tec.shifts)}
                                    </TableCell>

                                </TableRow>
                            ))} */}

                            {currentTableData && currentTableData.map(item => {
                                return <TableRow>
                                    <TableCell align="center">
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.serviceorders}
                                    </TableCell>
                                    <TableCell align="center">
                                        R${item.comissions}
                                    </TableCell>
                                    <TableCell align="center">
                                        R${item.triggereds}
                                    </TableCell>
                                    <TableCell align="center">
                                        R${item.shifts}
                                    </TableCell>
                                    <TableCell align="center">
                                        R${parseInt(item.comissions) + parseInt(item.triggereds) + parseInt(item.shifts)}
                                    </TableCell>

                                </TableRow>
                            })}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Paper>
        </Box >

    )
}

export default Commissions