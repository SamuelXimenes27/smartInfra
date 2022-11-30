import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// hooks
import { useState, useEffect } from "react";
import { useAuthentication } from './hooks/userAuthentication';

// context
import { AuthProvider } from "./context/authContext";

// pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard"
import ServiceOrders from './pages/ServiceOrders/ServiceOrders';
import Commissions from './pages/Commissions/Commissions';
import Configurations from './pages/Configurations/Configurations';
import Navbar from './components/navigation/Navbar';
import SidebarNavigation from './components/navigation/Sidebar';

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
      <section id={user ? 'dashboard' : ''}>
        <AuthProvider value={{ user }}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            {user ? <header><Navbar /></header> : null}
            {user ? <nav><SidebarNavigation /></nav> : null}
            <main>
              <div>
                <Routes>
                  <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}></Route>
                  <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />}></Route>
                  <Route path="/" element={user ? <Home /> : <Navigate to="/login" />}></Route>
                  <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />}></Route>
                  <Route path="/serviceorders" element={user ? <ServiceOrders /> : <Navigate to="/login" />}></Route>
                  <Route path="/commissions" element={user ? <Commissions /> : <Navigate to="/login" />}></Route>
                  <Route path="/configurations" element={user ? <Configurations /> : <Navigate to="/login" />}></Route>
                </Routes>
              </div>
            </main>
          </BrowserRouter>
        </AuthProvider>
      </section>
    </div>
  );
}

export default App;
