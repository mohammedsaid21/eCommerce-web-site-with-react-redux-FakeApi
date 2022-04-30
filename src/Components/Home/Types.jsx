import React from 'react'

import google from '../../assets/images/brands_2.jpg'
import mi from '../../assets/images/brands_3.jpg'
import samsung from '../../assets/images/brands_4.jpg'
import apple from '../../assets/images/brands_5.jpg'
import sony from '../../assets/images/brands_6.jpg'

const Types = () => {
  return (
    <div className='py-16'>
      <div className="container">
        <div className='flex border-2 md:p-6 px-10 md:px-24 justify-around '>
          <img className='w-[55%] md:w-auto' src={google} alt=''/>
          <img className='hidden md:block' src={mi} alt=''/>
          <img className='w-[55%] md:w-auto' src={samsung} alt=''/>
          <img className='w-[55%] md:w-auto' src={apple} alt=''/>
          <img className='hidden md:block' src={sony} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Types