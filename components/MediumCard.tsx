import React from 'react'
import Image from 'next/image'

export default function MediumCard({img,title}) {
  return (
    <div className='cursor-pointer hover:scale-105'>
    <div className='relative h-80 w-80 '>
     <Image src={img} layout="fill"  className='rounded-xl'/>
    </div>
    <h3 className='text-2xl mt-3'>{title}</h3>

    </div>

  )
}
