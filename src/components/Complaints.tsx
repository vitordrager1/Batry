import { complaint } from '../Database/moc'
import { Box, Typography, Container, Button } from '@mui/material'
import Complain from './Complaint'

const Complaints = () => {
    const mocComplaints = complaint

    return (
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
    )
}

export default Complaints
