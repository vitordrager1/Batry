import { users } from '../Database/moc'
import { Box, Typography} from '@mui/material'

//Modelo padrão de uma publicação/reclamação

type Complaint = {
    id: number
    title: string
    description: string
    idUser: number
}

const getUserName = (id: number) => {
    const user = users.find((item) => item.id === id);
    return user ? user.name : null; // Retorna o nome se o usuário for encontrado, caso contrário, retorna null
};

const Complaint = (complaint: Complaint) => {
    const nameUser = getUserName(complaint.id)
    return (
            <Box  className="flex m-2 max-w-7xl min-h-60 max-h-40 bg-stone-100">
                <Box className = "w-96 overflow-hidden">.png</Box>
                <Box className="max-w-screen-md w-2/3 overflow-hidden p-2 text-clip">
                    <Box className="flex justify-end"><Typography> {nameUser} </Typography></Box>
                    <Typography variant="h6">{complaint.title}</Typography>
                    <Typography variant="body1">{complaint.description}</Typography>
                </Box>
            </Box>
    )
}
export default Complaint