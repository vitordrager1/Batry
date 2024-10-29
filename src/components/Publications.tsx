import { publication } from '../Database/moc'
import { Box, Typography, Container, Button } from '@mui/material'
import SinglePubli from './SinglePubli'

const Publications = () => {
    const mocPublication = publication

    return (
        <Container className="place-items-center h-screen">
            <Box className="flex w-2xl justify-end">
                <Box><Typography>Últimas Reclamações</Typography></Box>
                <Box className="justify-end">
                    <Button variant='contained' color='primary'>Nova Reclamação</Button>
                </Box>
                
            </Box>
            
            <Box className=''>
            
                {mocPublication.map((item) => (
                    <SinglePubli key={item.id} {...item}></SinglePubli>
                ))}
            </Box>
        </Container>
    )
}

export default Publications
