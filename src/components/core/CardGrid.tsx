import React, {ReactElement, type FC} from 'react'

interface Props {
  children:ReactElement  
}

export const CardGrid:FC<Props> = ({children}) => {
  return (
    <div className="grid grid-cols-3 gap-4 h-full">{children}</div>
  )
}
