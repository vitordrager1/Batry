//index é a página inicial localhost:3000/
import { getComplaintQt } from '../services/SComplaints001';
import Complain from '../components/CComplaint'
import TitleDefault from '../layouts/LTitle';
import LayoutDefault from '../layouts/LPages';
import { Box } from '@mui/material';
import { getPublishNewsQt } from '../services/SPublishNews001';
import Post from '../components/Modal/MPublishNews';

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
