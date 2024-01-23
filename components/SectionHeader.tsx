import React from 'react'

type SectionHeaderProp ={
  children: React.ReactNode;
}

export default function SectionHeader({children}: SectionHeaderProp) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{children}</h2>
  )
}
