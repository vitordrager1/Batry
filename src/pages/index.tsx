//index é a página inicial localhost:3000/
import { getComplaintQt } from '../services/ComplaintsService';
import Complain from '../components/Complaint'
import TitleDefault from '../layouts/TitleDefault';
import LayoutDefault from '../layouts/LayoutDefault';
import { Box } from '@mui/material';
import { getPublishNewsQt } from '../services/PublishNewsService';
import Post from '../components/Modal/PostModal';

function App() {
  const lastComplaints = getComplaintQt(2);
  const lastPublishNews = getPublishNewsQt(2);
  return (
    <LayoutDefault hasMenu>
      <TitleDefault title='Últimas Reclamações'/>
      <Box className='m-auto w-1/2'>
                {lastComplaints && lastComplaints.map((item) => (
                    <Complain key={item.id} {...item}></Complain>
                ))}
        </Box>
        <TitleDefault title='Últimas Notícias'/>
        <Box className='m-auto w-1/2'>
                {lastPublishNews && lastPublishNews.map((item) => (
                    <Post key={item.id} {...item}></Post>
                ))}
        </Box>
    </LayoutDefault>
  );
}

export default App;
