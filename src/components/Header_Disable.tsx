//import { useAuth } from '@contexts/AuthContext'
import LogoutIcon from '@mui/icons-material/Logout'
import { Button } from '@mui/material'
//import Image from 'next/image'

const Header = () => {

  return (
    <header className="mx-3 mt-3 rounded-md border border-solid border-[#D8D8D8] bg-white p-2 md:p-3">
        <div className="flex justify-end items-center">
            <p>LORE IPSUM</p>
          
            <Button
                onClick={() => {}}>
                <LogoutIcon
                className="text-[1.25rem] md:text-4xl"
                color="secondary"
                />
            </Button>
       
        </div>
    </header>
  )
}

export default Header
