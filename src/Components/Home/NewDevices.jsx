import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { data } from '../../assets/DataNewDevices'

import { addProductToCart } from '../../redux/productSlice'


const NewDevices = ({ newDevices }) => {

  // const getNewDevicees = async () => {
  // try {
  // const res = await fetch("https://fakestoreapi.com/products");
  // const data = await res.json();
  // const info =  data.filter(product => product.catogray === 'newDevices')
  // setData(info)
  // console.log(data.map((idd) => (console.log(idd.image))))
  // return data;
  // } catch (error) {
  // return (error.message);
  // }
  // }

  const dispatch = useDispatch()

  const handleBuy = (e) => {
    let co = 0
    dispatch(addProductToCart({
      id: e.id,
      title: e.title,
      price: e.price,
      img: e.imgSrc,
      desc: e.desc,
      quantity: co++,
      catogray: e.catogray,
    }))
  }
  const [product, setProduct] = useState("")
  const [state, setState] = useState(false)

  const openModal = (item) => {
    setProduct(item)
    setState(true)
  }

  const closeModal = () => {
    setState(false)
  }

  const modalProduct =
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className={`relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg  text-center`}>
          <div className="text-red-800 text-[28px] text-right block">
            <span className='w-full cursor-pointer font-bold' onClick={closeModal}>&times;</span>
          </div>
          <img className='w-96 h-96 mx-auto object-fit' src={product.imgSrc} alt='' />
          <h3 className='text-3xl'>{product.title}</h3>
          <h4 className='text-2xl py-2 font-bold'>${product.price}</h4>
          <button onClick={() => handleBuy(product)} className='bg-blue-500 text-sm px-7 py-3 text-white rounded-lg transition-all duration-300 hover:bg-blue-700'>Add To Cart</button>
        </div>
      </div>
    </div>

  return (
    <>
      <div className="container pt-12">
        <div className='flex justify-between items-center px-4'>
          <h2 className='text-2xl font-medium pb-4'>New Devices</h2>
          <ul className='flex justify-between w-1/3'>
            <li className='md:block hidden text-xl cursor-pointer transition-all text-[#0e8ce4] hover:text-2xl'>Featured</li>
            <li className='md:block hidden text-xl cursor-pointer  pb-4 text-gray-500 transition-all hover:text-black'>Audio & Video</li>
            <li className='md:block hidden text-xl cursor-pointer  pb-4 text-gray-500 transition-all hover:text-black'>Labtops</li>
          </ul>
        </div>
        {/*  Start Items  */}
        <div className="flex border-t-2 pt-6 pb-4">
          <div className='flex flex-wrap'>
            {newDevices.length > 0 ?
              newDevices.map((item, i) => (
                <div key={i} className='flex flex-col items-center justify-between h-[%] flex-wrap w-1/2 md:w-1/4 pt-10 border-l-2 px-2 hover-item mt-2 border-b-2'>
                  <img onClick={() => openModal(item)} className='w-32 h-32 object-fit cursor-pointer' src={`${item.imgSrc}`} alt='' />
                  <p className='py-5'>{item.title}</p>
                  <h5>${item.price}</h5>
                  <button onClick={() => handleBuy(item)} className='bg-[#0e8ce4] hover:bg-blue-400 cursor-pointer w-full text-2xl text-white rounded-md py-2 mt-4'>Add To Cart</button>
                </div>
              )) : " Loading ....."
            }
          </div>
          {state ? (
            modalProduct
          ): ''
        }
        </div>
      </div>
    </>
  )
}

export default NewDevices