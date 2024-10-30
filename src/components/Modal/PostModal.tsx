import { getUserName } from '../../services/UsersService'
import { Box, Typography, Modal, Button } from '@mui/material'
import React, { useState } from 'react';

//FAZER UM COMPONENTE NO ESTILO SINGLEPUBLI, PORÉM DEVE SER MODAL PARA EXPANDIR A NOTICIA

type Post = {
    id: number
    title: string
    description: string
    resume: string
    reference: string
    idUser: number
}

const Post = (post: Post) => {

    // Estado para controlar o modal
    const [open, setOpen] = useState(false);
    // Funções para abrir e fechar o modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // Obter o nome do usuário
    const nameUser = getUserName(post.id)
    return (
        <> {/*O símbolo <> </> é conhecido como um Fragment no React. Ele permite agrupar múltiplos elementos JSX sem adicionar um elemento extra ao DOM, como uma div ou Box.    */}
            
            <Box onClick={handleOpen} className="flex m-2 max-w-7xl min-h-60 max-h-40 bg-stone-100">
                <Box className = "w-96 overflow-hidden">.png</Box>
                <Box className="max-w-screen-md w-2/3 overflow-hidden p-2 text-clip">
                    <Box className="flex justify-end"><Typography> {nameUser} </Typography></Box>
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography variant="body1">{post.resume}</Typography>
                </Box>
            </Box>
        
            {/* Modal que exibe a notícia completa */}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
                <Box className="p-4 bg-white max-w-xl mx-auto my-20 rounded-lg shadow-lg">
                <Typography id="modal-title" variant="h5" className="font-bold">{post.title}</Typography>
                <Typography id="modal-description" variant="body1" className="mt-4">
                    {post.description}
                    </Typography>
                <Typography id="modal-description" variant="body2" className="mt-4 text-blue-600 underline cursor-pointer hover:text-blue-800">
                    Referencias: {post.reference}
                </Typography>
                <Button onClick={handleClose} variant="contained" color="primary" className="mt-4">Fechar</Button>
                </Box>
            </Modal>
        </>
    )
}
export default Post
