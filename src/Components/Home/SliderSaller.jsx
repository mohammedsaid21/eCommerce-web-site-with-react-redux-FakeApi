import React from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../redux/productSlice'

const SliderSaller = () => {
  const dispatch = useDispatch()

  const handleBuy = () => {
    let co = 0
    dispatch(addProductToCart({
      id: 213,
      title: 'MacBook Air 13',
      price: 1500,
      img: 'https://i.guim.co.uk/img/media/7579016f06c6636943e2739c712ca52cb8dc44ad/0_333_5080_3048/master/5080.jpg?width=620&quality=85&auto=format&fit=max&s=54b051a18bf39d55ff3defe76501ef41',
      desc: 'Lorem ipsum, dolor sit ams necessit asd adsdsasda atibus Anin fadsk saja',
      quantity: co++,
      catogray: '',
    }))
  }
  
  return (
    <div className='py-24 md:py-12 px-12 bg-slider '>
      <div className="container w-[90%] mx-auto">
        <div className='flex items-center justify-between flex-col md:flex-row'>
          <div className='flex flex-col items-stretch md:items-start justify-between h-48 md:order-1 order-7 mt-4 md:mt-0'>  {/* Content */}
            <h2 className='text-3xl mb-2 font-bold'>MacBook Air 13</h2>
            <p className='text-gray-400 w-2/3 '>Lorem ipsum, dolor sit ams necessit asd adsdsasda atibus Anin fadsk saja.</p>
            <div className='flex my-4'>
              <p className='text-red-700 w-2/3 '>$1500</p>
              <span className="text-gray-400 ml-4 line-through">$295</span>
            </div>
            <button className='bg-blue-500 px-8 py-4 text-white rounded-lg transition-all duration-300 hover:bg-blue-700' onClick={() => handleBuy()} >Add In Card</button>
          </div>
          <img className='w-full md:w-3/5 md:order-1 order-6 ' src={require(`../../assets/images/banner_2_product.png`)} alt='' />
        </div>
      </div>
    </div>
  )
}

export default SliderSaller