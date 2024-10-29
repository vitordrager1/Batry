import { FC } from 'react'

type TitleDefaultProps = {
  title: string
  className?: string
}

const TitleDefault: FC<TitleDefaultProps> = ({ title, className = '' }) => {
  return (
    <div
      className={`mx-3 mt-5 rounded-md  p-3 ${className}`}
    >
      <p className="text-center font-bold text-blue-600 border-b-2 border-blue-600 pb-1">{title}</p>  
    </div>
  )
}

export default TitleDefault
