import React from 'react'
import { useDispatch } from 'react-redux'
import iphone from '../../assets/images/banner_product.png'
import { addProductToCart } from '../../redux/productSlice'

const HeaderImg = () => {
  const dispatch = useDispatch()
  const addToCart = () => {
    let co = 0
    dispatch(addProductToCart({
      id: 123,
      title: 'Apple Iphone 6s',
      price: 460,
      imgSrc: iphone,
      desc: 'NEW ERA OF SMARTPHONES',
      quantity: co++,
      catogray: ''
    }))
  }

  return (
    <div className='h-[360px] md:h-[400px] background-home mt-[62px]'>
      <div className="container mx-auto">
        <div className='flex justify-start w-full md:w-2/3 mx-auto mr-0 py-12'>
          <div className="flex flex-col justify-between h-44 ">
            <h2 className='text-[#7599b2] text-xl md:text-3xl  w-[90%]'>NEW ERA OF SMARTPHONES</h2>
            <p className='text-red-700 text-lg md:text-2xl py-2'><span className='line-through text-[#727171] mr-2'>$530</span> $460</p>
            <p className='mx-1'>Apple Iphone 6s</p>
            <button onClick={() => addToCart()} className='my-4 bg-gray-300 w-full md:w-1/3 py-2 rounded-xl hover:text-[#7599b2] hover:bg-[#7599b2] hover:text-white transition-all'>Buy Now</button>
          </div>
          <div className="w-[280px] md:w-[360px] ml-0 ">
            <img className='move-svg' src={iphone} alt='img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderImg