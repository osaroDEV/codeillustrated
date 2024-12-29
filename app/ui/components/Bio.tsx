import React, { FC } from 'react'
import { crimson } from '../font'

const Bio: FC = () => {
  return (
    <div className='mt-28'>
        <p 
        className={`${crimson.className} text-2xl`}
        ><span className='text-[#ff6542] font-extrabold'>CI.</span> is a small, dedicated team of creative thinkers committed to making a positive impact. Our mission is to transform visionary ideas into meaningful, lasting realities through design and innovation.</p>
    </div>
  )
}

export default Bio