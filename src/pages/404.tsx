import SearchOffIcon from '@mui/icons-material/SearchOff'
// import Logo from "@public/assets/images/404.png"
import Image from 'next/image'

const nothingFound = () => {
  return (
    <div className="container flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center">
        <p className="text-2xl font-bold text-primary md:text-5xl">
          <SearchOffIcon className="text-4xl md:text-6xl" />
          Página não encontrada
        </p>

        {/* <Image
          priority
          src={Logo}
          alt="logo-image"
          height={100}
          className="m-5"
        /> */}
      </div>
    </div>
  )
}

export default nothingFound
