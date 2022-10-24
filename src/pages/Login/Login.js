import React from 'react'
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/userAuthentication';

// mui
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';




import styles from './Login.module.css';
import { Form } from 'react-router-dom';

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
            <h1>Entrar</h1>
            <p>Faça o login para poder utilizar o sistema</p>
            <Stack
                component="form"
                sx={{
                    width: '50ch',
                }}
                spacing={3}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="input-with-icon-textfield"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    type="email"
                    name="email"
                    required
                    placeholder='Usuario'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    id="input-with-icon-textfield"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                    }}
                    type="password"
                    name="password"
                    required
                    placeholder='Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                />
                {!loading && <Button sx={{ height: '6ch' }} variant="contained" type='submit'>Login</Button>}
                {loading && <Button sx={{ height: '6ch' }} variant="contained" disabled>Aguarde...</Button>}
                {error && <p className='error'>{error}</p>}
            </Stack>
        </div>
    )
}

export default Login