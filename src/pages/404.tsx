import SearchOffIcon from '@mui/icons-material/SearchOff'
import LayoutDefault from '../layouts/LayoutDefault'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@mui/material'

const nothingFound = () => {
  return (
    <LayoutDefault>
      <div className="container flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <p className="text-2xl font-bold text-primary md:text-5xl">
            <SearchOffIcon className="text-4xl md:text-6xl" />
            Página não encontrada - 404
          </p>

          <Button href='/' variant='contained' color='primary'>Inicio</Button>
        </div>
      </div>
    </LayoutDefault>
  )
}

export default nothingFound
