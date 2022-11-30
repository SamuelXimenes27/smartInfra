import React from 'react'

import styles from './Sidebar.module.css'

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WalletIcon from '@mui/icons-material/Wallet';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { useAuthentication } from '../../hooks/userAuthentication';
import { NavLink } from 'react-router-dom';

import loginImg from '../../assets/img/just_logo_smart.png'

import SimpleModal from './Modal';


const drawerWidth = 240;

const SidebarNavigation = (props) => {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { logout } = useAuthentication();

  const drawer = (
    <div>
      <Toolbar>
        <Box
          component={NavLink}
          activeClassName={({ isActive }) =>
            isActive ? styles.active : undefined
          }
          to={'/'}
          sx={{
            width: 40,
            height: 40,
            backgroundColor: '#D9D9D9',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            margin: "0 20px 0 0",
          }}
        >
          <Box
            component="img"
            alt="Logo Company"
            src={loginImg}
            sx={{
              margin: "5px 0 0 0",
            }}
          />
        </Box>
        <p className={styles.logoName}>{'Grupo\nSmart'}</p>
      </Toolbar>
      <Divider />
      <List>
        {['Dashboard', 'Ordem de Serviços', 'Comissões', 'Configurações'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            component={NavLink}
            activeClassName={({ isActive }) =>
              isActive ? styles.active : undefined
            }
            sx={{ color: '#8C8C8C' }}
            to={index === 0 ? "/dashboard" : null || index === 1 ? '/serviceorders' : null || index === 2 ? "/commissions" : null || index === 3 ? "/configurations" : null}
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <DashboardIcon /> : null}
                {index === 1 ? <DateRangeIcon /> : null}
                {index === 2 ? <WalletIcon /> : null}
                {index === 3 ? <MiscellaneousServicesIcon /> : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton onClick={logout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={'Sair'} />
        </ListItemButton>
      </ListItem>
      <SimpleModal />
    </div >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </nav>
  )
}

export default SidebarNavigation