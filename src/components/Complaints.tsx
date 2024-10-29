import { complaint } from '../Database/moc'
import { Box, Typography, Container, Button } from '@mui/material'
import SinglePubli from './Complaint'

const Complaints = () => {
    const mocComplaints = complaint

    return (
        <Container className="place-items-center h-screen">
            <Box className="flex mt-10 min-h-20 w-full">
                <Box className="ml-auto">
                    <Button variant='contained' color='primary'>Nova Reclamação</Button>
                </Box>
            </Box>
            
            <Box className=''>
                {mocComplaints.map((item) => (
                    <SinglePubli key={item.id} {...item}></SinglePubli>
                ))}
            </Box>
        </Container>
    )
}

export default Complaints
