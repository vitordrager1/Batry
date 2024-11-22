import { publishNews } from '../Database/moc'
import { Box, Typography, Container, Button } from '@mui/material'
import Post from './Modal/PostModal'

//Percorre a tabela de noticias, e gera os modais clicaveis.

const PublishNews = () => {
    const mocPublishNews = publishNews

    return (
        <Container className="place-items-center h-screen">
            <Box className="flex mt-10 min-h-20 w-full">
                <Box className="ml-auto">
                    <Button variant='contained' color='primary'>Nova Notícia</Button>
                </Box>
            </Box>
            
            <Box className=''>
                {mocPublishNews.map((item) => (
                    <Post key={item.id} {...item}></Post>
                ))}
            </Box>
        </Container>
    )
}

export default PublishNews
