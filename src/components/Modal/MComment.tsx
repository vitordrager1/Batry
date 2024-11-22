import { getUserName } from '../../services/SUsers001'
import { Box, Typography, Modal, Button} from '@mui/material'
import React, { useState } from 'react';
import {getComentsComplaint} from '../../services/SComments001'
import Textarea from '@mui/joy/Textarea';

// Declare a interface no mesmo arquivo
interface CommentProps {
    idComplaint: number;
  }

const Coment: React.FC<CommentProps> = ({ idComplaint }) => {

    // Estado para controlar o modal
    const [open, setOpen] = useState(false);
    // Funções para abrir e fechar o modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // Obter o nome do usuário
    // const nameUser = getUserName(coment.idUser)

    const allComents = getComentsComplaint(idComplaint)//obtem todos os comentarios da reclamação
    return (
        <> {/*O símbolo <> </> é conhecido como um Fragment no React. Ele permite agrupar múltiplos elementos JSX sem adicionar um elemento extra ao DOM, como uma div ou Box.    */}
            
            <Box onClick={handleOpen}>
            <Typography
                tabIndex={0} // Torna o elemento focável
                sx={{
                    color: 'primary.main', // Altere a cor
                    cursor:"pointer" // Borda para maior visibilidade
                }}
            >
                Comentários
            </Typography>
            </Box>
        
            {/* Modal que exibe os comentarios */}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
                <Box className="p-4 bg-white max-w-xl mx-auto my-20 rounded-lg shadow-lg">

                    <Box className="mb-4">
                        {allComents && allComents.map((item) => (
                            <Typography key={item.id}>{item.description}</Typography>
                        ))}
                    </Box>

                    <form
                            onSubmit={(event) => {
                            event.preventDefault();
                            }}
                        >

                        <Textarea size="sm" name="Outlined" placeholder="Comente aqui" variant="outlined" minRows={2} />
                        <Box className="flex justify-end mt-3">
                            <Button size='small'>Cancelar</Button>
                            <Button size='small' variant='contained' type="submit">Comentar</Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </>
    )
}
export default Coment
