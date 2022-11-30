import { Box } from '@mui/system'
import React from 'react'
import EarningCard from '../../components/card/CardTest'

// CSS
import styles from './Home.module.css'

import data from '../../data/db.json'

const Home = () => {
    const countData = data['serviceorders'].length;

    return (
        <div style={styles}>
            <Box sx={{ mt: 10, ml: 10, width: 1500, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <EarningCard props={{ title: countData, subtitle: 'Total de Ordem de Serviços' }} />
                <EarningCard props={{ title: 'R$ 0', subtitle: 'Total de Comissões' }} />
                <EarningCard props={{ title: 'R$ 15/h', subtitle: 'Valor de Comissão' }} isComing={true} />
                <EarningCard props={{ title: '0', subtitle: 'Total de Roteadores Usados' }} />
            </Box>
        </div>
    )
}

export default Home