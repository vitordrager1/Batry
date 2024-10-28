import Footer from '../components/Footer'
import Header from '../components/Header'
// import IndicatorRedirector from '@/components/Indicator/IndicatorRedirector'
// import TitleDefault from '@/components/Title/TitleDefault'
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
    <div className="flex flex-1 flex-col place-content-start justify-between gap-8 bg-[#EDEDED] md:h-dvh md:gap-10">
      <div className="flex flex-col gap-5 md:gap-8">
        <Header />
        {/* {hasMenu && showMenu} */}

        <div className="flex flex-col gap-4">
          {/* {title && <TitleDefault title={title} />} */}

          <div className="flex min-h-[700px] flex-1 flex-col p-3 md:min-h-[800px]">
            <div className="flex-1 flex-col items-center justify-start">
              {children}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LayoutDefault
