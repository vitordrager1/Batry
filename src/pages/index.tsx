//index é a página inicial localhost:3000/

import Link from 'next/link';
import LayoutDefault from '../layouts/LayoutDefault';
import { Box } from '@mui/material';
// import News from '../pages/news'

function App() {
  return (
    <LayoutDefault hasMenu>
      <div className="flex items-center justify-center min-h-screen bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Tailwind CSS funcionando no Next.js!</h1>
      </div>
    </LayoutDefault>
  );
}

export default App;
