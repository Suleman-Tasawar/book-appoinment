import React from 'react'
import { HeaderCardProps } from '../utils/interface'

const HeaderCard:React.FC<HeaderCardProps> = ({title,titleClass,text,textClass}) => {
  return (
    <>
        <h1 className={`${titleClass} font-bold mb-4`}>{title}</h1>
        <p className={`${textClass}`}>
          {text}
        </p>
    </>
  )
}

export default HeaderCard
