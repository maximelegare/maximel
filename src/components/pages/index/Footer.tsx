import React from 'react'

import { Section } from '~/components/core/Section'

export const Footer = () => {
  const date = new Date()  
  return (
    <Section styles="bg-black" layout='bottom'>
        <div className='text-center mt-24'>
            <div className="text-gray-white opacity-40">Maxime Légaré, {date.getFullYear()} </div>
        </div>
    </Section>
  )
}
