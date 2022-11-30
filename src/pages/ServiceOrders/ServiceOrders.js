import React from 'react'

import styles from './ServiceOrders.module.css'

import Content from '../../components/list/ContentList'
import { Box } from '@mui/material'
import Page from '../../components/list/Test'
import Test2 from '../../components/list/test/Test2'

const ServiceOrders = () => {
    return (
        <Box sx={{ mt: 10 }}>
            <Content />
            {/* <Page /> */}
            {/* <Test2 /> */}
        </Box>
    )
}

export default ServiceOrders