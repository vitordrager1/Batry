import { Fragment, useEffect, useState } from 'react'
import LayoutDefault from '../layouts/LPages'
//import Complaint from '../components/Complaints_Disable'
import { complaints } from '../Database/moc'
import { Box, Container, Button } from '@mui/material'
import Complain from '../components/CComplaint'

const Complaints = () => {
    const mocComplaints = complaints
    return (
        <LayoutDefault hasMenu title="Últimas Reclamações">
            <Container className="place-items-center">
                <Box className="flex mt-10 min-h-20 w-full">
                    <Box className="ml-auto">
                        <Button variant='contained' color='primary'>Nova Reclamação</Button>
                    </Box>
                </Box>
                
                <Box className=''>
                    {mocComplaints.map((item) => (
                        <Complain key={item.id} {...item}></Complain>
                    ))}
                </Box>
            </Container>
        </LayoutDefault>
    )
}

export default Complaints;