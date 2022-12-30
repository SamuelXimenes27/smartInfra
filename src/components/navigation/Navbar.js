import React from 'react';
import { NavLink } from "react-router-dom";

import { useAuthentication } from '../../hooks/userAuthentication';

import { useAuthValue } from '../../context/authContext';

import styles from './Navbar.module.css'
import { Box } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import { Typography } from '@mui/material';

const Navbar = () => {
    const { user } = useAuthValue();
    const nameUser = user.email;
    const { logout } = useAuthentication();

    const current = new Date();
    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];
    const mins = ('0' + current.getMinutes()).slice(-2);

    const date = `${current.getHours()}:${mins} ${current.getDate()} ${monthNames[current.getMonth()]} ${current.getFullYear()}`;


    return (
        <nav className={styles.navbar}>
            <div>
                <p className={styles.greetings}>
                    {'Olá '}
                    {nameUser}
                    {'\n'}
                    <span style={{ color: '#2148C0', fontSize: 14 }}>{date}</span>
                </p>
            </div>
            <Box sx={{ display: 'flex' }}>
                <Typography paddingTop={1.5}>{nameUser}</Typography>
                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#D9D9D9',
                        borderRadius: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        margin: "5px 0 0 10px",
                    }}
                >
                    <PersonIcon sx={{
                        margin: "7px",
                    }} />
                </Box>
            </Box>
        </nav>
    )
}

export default Navbar