import React from 'react'

const Title = ({children , addClass}) => {
  return (
    <div className={`${addClass} font-dancing font-bold font-secondery`}>{children}</div>
  )
}

export default Title