import React, { FC } from 'react'
import { roboto } from '../font'

const Bio: FC = () => {
  return (
    <div className='mt-10'>
        <p className={`${roboto.className} text-[1.2rem]`}><span className='text-red-500'>CI.</span> is a small, dedicated team of creative thinkers committed to making a positive impact. Our mission is to transform visionary ideas into meaningful, lasting realities through design and innovation.</p>
    </div>
  )
}

export default Bio