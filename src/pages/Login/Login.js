import React from 'react'
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/userAuthentication';

// mui
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';

import styles from './Login.module.css';
import loginImg from '../../assets/img/logo_smart.svg'

const drawerWidth = 240;

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { login, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            email,
            password
        }

        const res = await login(user);

        console.log(res);
    }

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError])


    return (
        <div className={styles.login}>
            <Stack
                component="form"
                sx={{
                    width: '50ch',
                    mt: '5ch',
                }}
                spacing={3}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Box
                    component="img"
                    alt="Logo Company"
                    src={loginImg}
                />
                <TextField
                    id="input-with-icon-textfield"
                    type="email"
                    name="email"
                    required
                    placeholder='Usuario'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon sx={{ color: 'white' }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        input: {
                            color: 'white',
                        }
                    }}

                />
                <TextField
                    id="input-with-icon-textfield"
                    type="password"
                    name="password"
                    required
                    placeholder='Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon sx={{ color: 'white' }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        input: {
                            color: 'white'
                        }
                    }}
                />
                {!loading && <Button sx={{ height: '6ch', backgroundColor: 'white', color: '#2148C0', "&:hover": { backgroundColor: '#393E46', color: 'white' } }} variant="contained" type='submit'>Login</Button>}
                {loading && <Button sx={{ height: '6ch', "&:disabled": { backgroundColor: '#393E46', color: 'white' } }} variant="contained" disabled>Aguarde...</Button>}
                {error && <p className='error'>{error}</p>}
            </Stack>
        </div>
    )
}

export default Login