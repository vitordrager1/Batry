import { Fragment, useEffect, useState } from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import Complaints from '../components/Complaints'
const Home = () => {


    return (
        <LayoutDefault hasMenu title="Últimas Reclamações">
            <Complaints/>
            
        </LayoutDefault>
    )
}

export default Home;