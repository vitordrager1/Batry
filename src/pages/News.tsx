import { Fragment, useEffect, useState } from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import PostNews from '../components/PostNews'
const Home = () => {


    return (
        <LayoutDefault hasMenu title="Inicio">
            
            <PostNews/>
        </LayoutDefault>
    )
}

export default Home;