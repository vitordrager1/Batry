import { users, publication } from '../Database/moc'
import { Box, Typography, Container, Button  } from '@mui/material'

const Publications = () => {
    const mocPublication = publication

    console.log(mocPublication)
    return (
        <Container className="grid place-items-center h-screen">
            <Box className='flex'>
                <Box><Typography>Últimas Reclamações</Typography></Box>
                <Box>
                    <Button variant='contained' color='primary'>Nova Reclamação</Button>
                </Box>
                
            </Box>
            <Box  className="">
                {mocPublication.map((item) => (
                <Box key={item.id}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body1">{item.desc}</Typography>
                    <Typography variant="caption">Usuário ID: {item.idUser}</Typography>
                </Box>
                
                ))}
            </Box>
        </Container>
    )
}

export default Publications
