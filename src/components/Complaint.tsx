import { getUserName } from '../services/UsersService'
import { Box, Typography} from '@mui/material'
import Coment from './Modal/ComentModal'

//Modelo padrão de uma publicação/reclamação

type Complaint = {
    id: number
    title: string
    description: string
    idUser: number
}

const Complaint = (complaint: Complaint) => {
    const nameUser = getUserName(complaint.id)
    return (
            <Box  className="flex m-2 max-w-7xl min-h-60 max-h-40 bg-stone-100">
                <Box className = "w-96 overflow-hidden">.png</Box>
                <Box className="max-w-screen-md w-2/3 overflow-hidden p-2 max-h-60">
                    <Box className="flex justify-end"><Typography> {nameUser} </Typography></Box>
                    <Box className="min-h-40 max-h-40 overflow-hidden">
                        <Typography variant="h6">{complaint.title}</Typography>
                        <Typography className='text-clip' variant="body1">{complaint.description}</Typography>
                    </Box>

                    <Coment key={complaint.id} idComplaint={complaint.id}></Coment>

                </Box>
            </Box>
    )
}
export default Complaint
