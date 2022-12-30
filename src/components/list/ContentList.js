import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useFetch } from '../../hooks/useFetch';
import { createTheme, TableBody, TableCell, TableHead, TableRow, TableContainer, Table } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useMemo } from 'react';
import data from '../../data/db.json'
import Paginations from './test/Pagination';

const url = "http://localhost:3000/serviceorders";

let PageSize = 4;

const theme = createTheme({
    palette: {
        primary: {
            main: '#2148C0'
        }
    }
});

export default function Content() {
    const { loading, error } = useFetch(url);

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        console.log(currentPage);
        return data['serviceorders'].slice(firstPageIndex, lastPageIndex);

    }, [currentPage]);


    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{ maxWidth: 1200, margin: 'auto', overflow: 'hidden', ml: 30 }}>
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
                >
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <SearchIcon color="inherit" sx={{ display: 'block' }} />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    placeholder="Procure por ID ou Nome do Técnico"
                                    InputProps={{
                                        disableUnderline: true,
                                        sx: { fontSize: 'default' },
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <TableContainer>
                    <Table>
                        <TableHead sx={{ minWidth: 650 }} >
                            <TableRow align="center">
                                <TableCell align="center">Ordem de Serviço</TableCell>
                                <TableCell align="center">Início do Serviço</TableCell>
                                <TableCell align="center">Finalização do Serviço</TableCell>
                                <TableCell align="center">Técnicos</TableCell>
                                <TableCell align="center">Serviço Realizado</TableCell>
                                <TableCell align="center">Quantidade</TableCell>
                                <TableCell align="center">SLA</TableCell>
                                <TableCell align="center">Acionamento</TableCell>
                                <TableCell align="center">Comissão</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {/* {loading && <p>Carregando dados...</p>} */}
                            {/* {error && <p>{error}</p>} */}
                            {currentTableData && currentTableData.map(item => {
                                return (
                                    <TableRow>
                                        <TableCell align="center">{item.id}</TableCell>
                                        <TableCell align="center">{item.start_service}</TableCell>
                                        <TableCell align="center">{item.end_service}</TableCell>
                                        <TableCell align="center">
                                            {
                                                <>
                                                    <p>{item.tech_1}</p>
                                                    <p>{item.tech_2}</p>
                                                    <p>{item.tech_3}</p>
                                                    <p>{item.tech_4}</p>
                                                </>
                                            }
                                        </TableCell>
                                        <TableCell align="center">
                                            {
                                                <>
                                                    <p>{item.type_service_tech_1}</p>
                                                    <p>{item.type_service_tech_2}</p>
                                                    <p>{item.type_service_tech_3}</p>
                                                    <p>{item.type_service_tech_4}</p>
                                                </>
                                            }
                                        </TableCell>
                                        <TableCell align="center">
                                            {
                                                <>
                                                    <p>{item.qty_service_tech_1}</p>
                                                    <p>{item.qty_service_tech_2}</p>
                                                    <p>{item.qty_service_tech_3}</p>
                                                    <p>{item.qty_service_tech_4}</p>
                                                </>
                                            }
                                        </TableCell>
                                        <TableCell align="center">{item.sla === true ? 'ATIVO' : 'DESATIVADO'}</TableCell>
                                        <TableCell align="center">{item.triggered === true ? 'FDS' : 'SEMANA'}</TableCell>
                                        <TableCell align="center">{item.comission}</TableCell>
                                        {/* <TableCell align="center">{<IconButton><OpenInNewIcon /></IconButton>}</TableCell> */}
                                    </TableRow>
                                );
                            }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box>
                    <Paginations
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={data['serviceorders'].length}
                        shape="rounded"
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </Box>
            </Paper>
        </ThemeProvider >
    );
}