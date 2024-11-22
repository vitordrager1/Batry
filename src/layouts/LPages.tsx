import Footer from '../components/CFooter'
import Header from '../components/CHeader'
// import AppBar from '../components/AppBar'
// import IndicatorRedirector from '@/components/Indicator/IndicatorRedirector'
import TitleDefault from './LTitle'
import { FC, ReactElement, ReactNode } from 'react'

type LayoutDefaultProps = {
  title?: string
  menu?: ReactElement
  hasMenu?: boolean
  children: ReactNode
}

const LayoutDefault: FC<LayoutDefaultProps> = ({
  children,
  menu,
  hasMenu,
  title,
}) => {
  //const showMenu: ReactElement = menu || <IndicatorRedirector />

  return (
    <div className="flex flex-col min-h-screen justify-between bg-[#EDEDED]">
      <div>
        <Header />
        {/* {hasMenu && showMenu} */}

        <div>
          {title && <TitleDefault title={title} />}
          <div>{children}</div>
        </div>
      </div>

        <Footer />
    </div>
  )
}

export default LayoutDefault
