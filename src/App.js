import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/userAuthentication";

// context
import { AuthProvider } from "./context/authContext";

// pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadindUser = user === undefined;

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth]);

  if (loadindUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" element={user ? <Home /> : <Navigate to="/login" />}></Route>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}></Route>
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />}></Route>
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
