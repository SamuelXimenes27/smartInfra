import React from 'react';
import { NavLink } from "react-router-dom";

import { useAuthentication } from '../hooks/userAuthentication';

import { useAuthValue } from '../context/authContext';

import styles from './Navbar.module.css'

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>SmartInfra <span>V1.0</span></NavLink>
            <ul className={styles.links_list}>
                {!user && (
                    <>
                        <li><NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Entrar</NavLink></li>
                        <li><NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar</NavLink></li>
                    </>
                )}
                {user && (
                    <>
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink></li>
                        <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>Dashboard</NavLink></li>
                    </>
                )}
                {user && (
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar