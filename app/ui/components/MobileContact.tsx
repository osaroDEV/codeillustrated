
import React from 'react'

const MobileContact = () => {
  return (
    <div className='absolute left-0 bottom-[2rem] text-[1rem] w-full px-4'>
        <ul className='flex justify-between w-full'>
            <li>{new Date().getFullYear()}</li>
            <li className='flex flex-col gap-2'>
                <p>LAGOS</p>
                <p>NIGERIA</p>
            </li>
            <li className='flex flex-col gap-2'>
                <a className='underline' href='mailto:ADMIN@CODEILLUSTRATED.COM'>ADMIN@CODEILLUSTRATED.COM</a>
                <a className='underline'  href='https://x.com/codeillustrated'>TWITTER</a>
            </li>
        </ul>
    </div>
  )
}

export default MobileContact