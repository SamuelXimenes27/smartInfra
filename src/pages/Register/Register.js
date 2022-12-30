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

import styles from './Register.module.css';


const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!");
            return;
        }

        const res = await createUser(user);

        console.log(res);
    }

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError])

    return (
        <div className={styles.register}>
            <h1>Cadastre-se</h1>
            <p>Registro provisorio durante o desenvolvimento</p>
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
                    type="text"
                    name="displayName"
                    required
                    placeholder='Nome do Usuario'
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
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
                    type="email"
                    name="email"
                    required
                    placeholder='E-mail do Usuario'
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
                    placeholder='Insira sua senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    name="confirmPassword"
                    required
                    placeholder='Confirme a sua senha'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    variant="outlined"
                />
                {/* <Button sx={{ height: '6ch', top: '20px' }} variant="contained" type='submit'>Registrar</Button> */}
                {!loading && <Button sx={{ height: '6ch' }} variant="contained" type='submit'>Registrar</Button>}
                {loading && <Button sx={{ height: '6ch' }} variant="contained" disabled>Aguarde...</Button>}
                {error && <p className='error'>{error}</p>}
            </Stack>
        </div>
    )
}

export default Register