import React from 'react'

type HeaderCard = {
    title:string,
    titleClass:string,
    text:string
    textClass:string
}

const HeaderCard:React.FC<HeaderCard> = ({title,titleClass,text,textClass}) => {
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
