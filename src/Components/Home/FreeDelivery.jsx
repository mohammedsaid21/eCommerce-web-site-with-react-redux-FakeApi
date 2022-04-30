import React from 'react'
import char1 from '../../assets/images/char_1.png'
import char2 from '../../assets/images/char_2.png'
import char3 from '../../assets/images/char_3.png'
import char4 from '../../assets/images/char_4.png'

const FreeDelivery = () => {
  return (
    <div className='container mx-auto my-12'>
      <div className='flex md:flex-row flex-col justify-around'>
        <div className='flex items-center md:p-8 md:px-12 p-4 px-8 mb-2 rounded-md border-2 shadow-lg hover:shadow-2xl transition-all'>
          <img src={char1} alt='' />
          <p className='ml-4'>
            free Delivery
          </p>
        </div>
        <div className='flex items-center md:p-8 md:px-12 p-4 px-8 mb-2 rounded-md border-2 shadow-lg hover:shadow-2xl transition-all'>
          <img src={char2} alt='' />
          <p className='ml-4'>
            free Delivery
          </p>
        </div>
        <div className='flex items-center md:p-8 md:px-12 p-4 px-8 mb-2 rounded-md border-2 shadow-lg hover:shadow-2xl transition-all'>
          <img src={char3} alt='' />
          <p className='ml-4'>
            free Delivery
          </p>  
        </div>
        <div className='flex items-center md:p-8 md:px-12 p-4 px-8 mb-2 rounded-md border-2 shadow-lg hover:shadow-2xl transition-all'>
          <img src={char4} alt='' />
          <p className='ml-4'>
            free Delivery
          </p>
        </div>
      </div>
    </div>
  )
}

export default FreeDelivery