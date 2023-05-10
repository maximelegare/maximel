import React, {type FC} from 'react'

import type { BlockContentModel } from '~/server/api/validation/project'

interface Props {
    subtitle?:BlockContentModel
}

export const BlockContent:FC<Props> = ({subtitle}) => {
  console.log(subtitle) 
  return (
    <div>BlockContent</div>
  )
}
