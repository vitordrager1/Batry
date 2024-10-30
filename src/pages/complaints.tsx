import { Fragment, useEffect, useState } from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import Complaint from '../components/Complaints'


const Complaints = () => {
    return (
        <LayoutDefault hasMenu title="Últimas Notícias">
            <Complaint/>
        </LayoutDefault>
    )
}

export default Complaints;