import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, getHotSallers } from '../../redux/productSlice'

const HotSallers = () => {

  const [product, setProduct] = useState("")
  const [state, setState] = useState(false)

  const openModal = (item) => {
    setProduct(item)
    setState(true)
  }
  //  -------------------->   

  const closeModal = () => {
    setState(false)
  }

  const { sallersProducts } = useSelector(state => state.productSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotSallers())
    console.log("UseEffect =>> Hot Sallers  2  ")
  }, [dispatch])

  const handleBuy = (e) => {
    let co = 0
    dispatch(addProductToCart({
      id: e.id, title: e.title, price: e.price,
      img: e.imgSrc, desc: e.desc, quantity: co++, catogray: e.catogray,
    }))
    setState(false)
  }

  return (
    <div className='py-[56px] bg-[#eff6fa] '>
      <div className="container mx-auto pt-12">

        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-medium pb-4'>Hot Sallers Devices</h2>
          <ul className='flex justify-between w-1/3'>
            <li className='md:block hidden text-xl cursor-pointer text-black transition-all hover:text-[#0e8ce4] border-b-2 border-[#0e8ce4]'>Featured</li>
            <li className='md:block hidden text-xl cursor-pointer  pb-4 text-gray-500 transition-all hover:text-black'>Audio & Video</li>
            <li className='md:block hidden text-xl cursor-pointer pb-4 text-gray-500 transition-all hover:text-black'>Labtops</li>
          </ul>
        </div>
        {/*  */}
        <div className='border-t-2 px-4 pt-4 md:px-8 md:pt-10 flex flex-wrap justify-between'>
          {sallersProducts.length > 0 ?
            sallersProducts.map((item, i) => (
              <div key={i} className="bg-white rounded-md md:px-2 py-4 px-6 md:py-4 flex items-center justify-between mb-4 scale-img md:w-[28%] w-[100%] mx-2 ">
                <img onClick={() => openModal(item)} className='w-20 md:w-[45%] h-20 md:h-28 object-fit cursor-pointer' src={item.imgSrc} alt='' />
                <div className="px-1 md:px-2 flex flex-col items-center md:w-[50%] w-44">
                  <h3 className='text-sm my-1'>{item.title}</h3>
                  <p className='text-red-700 text-sm py-1'>${item.price}<span className='text-gray-400 ml-4 line-through'>${parseInt(item.price) + 100}</span></p>
                  <button onClick={() => handleBuy(item)} className='bg-blue-500 text-sm px-2 py-2 text-white rounded-lg transition-all duration-300 hover:bg-blue-700'>Add To Cart</button>
                </div>
              </div>
            )) : "Loading.... "
          }
        </div>
      </div>

      {state ? (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className={`relative md:w-1/2 w-[50%] max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg  text-center`}>
              <div className="text-red-800 text-[28px] text-right block">
                <span className='w-full cursor-pointer font-bold' onClick={closeModal}>&times;</span>
              </div>
              <img className='md:w-96 h-24 md:h-96 mx-auto object-fit' src={product.imgSrc} alt='' />
              <h3 className='md:text-3xl text-xl'>{product.title}</h3>
              <h4 className='md:text-2xl text-lg py-2 font-bold'>${product.price}</h4>
              <button onClick={() => handleBuy(product)} className='bg-blue-500 text-sm md:px-7 md:py-3 py-3 px-2 text-white rounded-lg transition-all duration-300 hover:bg-blue-700'>Add To Cart</button>
            </div>
          </div>
        </div>
      ) : ''
      }
    </div>

  )
}

export default React.memo(HotSallers);