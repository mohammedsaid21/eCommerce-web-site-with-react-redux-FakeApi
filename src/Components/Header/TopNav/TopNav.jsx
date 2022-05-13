import React from 'react'
import { Link } from 'react-router-dom'
import './topnav.css'

const TopNav = () => {
  
  return (
    <div className="bg-gray-50 text-gray-500 border-b-[1px] py-6 font-light">
      <div className="container mx-auto">
        <div className='flex items-center justify-between'>
          {/*  */}
          <div className='md:[38%] w-[50%] flex items-center'>
            <p className='w-1/2 text-[12px] md:text-sm'>mounira-86@hotmail.com</p>
          </div>
          {/*  */}
          <div className='w-1/ md:w-1/3 flex justify-between items-center'>
            <p className='hidden md:block'>$ US dollar</p>
            <Link to='/signin' className='hover:text-blue-700 font-bold transition-all hover:scale-110 text-md md:text-sm hidden md:block'>Register</Link>
            <Link to='/signin' className='hover:text-blue-700 font-bold transition-all hover:scale-110 text-[14px] md:text-sm bg-gray-200 p-2 rounded-xl'>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav