import React from 'react'
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/userAuthentication';

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

        if (password != confirmPassword) {
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
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        required
                        placeholder='Nome do Usuario'
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder='E-mail do Usuario'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder='Insira sua senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confimaçao de Senha:</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder='Confirme a sua senha'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                {!loading && <button className='btn'>Cadastrar</button>}
                {loading && <button className='btn' disabled>
                    Aguarde...
                </button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Register