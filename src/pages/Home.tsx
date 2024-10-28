import { Fragment, useEffect, useState } from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import { Box, Button, Grid } from '@mui/material'
import Publications from '../components/Publications'
const Home = () => {


    return (
        <LayoutDefault hasMenu title="Inicio">
            <Publications/>
        </LayoutDefault>
    )
}

export default Home;