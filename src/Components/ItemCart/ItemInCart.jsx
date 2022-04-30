import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decreseQuantity, increseQuantity, removeItem, totalPriceForElement, totalPriceForElementDecrement } from '../../redux/productSlice'

const ItemInCart = ({ price, title, imgSrc }) => {

  const [value, setValue] = useState(1)
  const { productsInCart } = useSelector(state => state.productSlice) 
  const dispatch = useDispatch()

  function decrement() {
    setValue(value - 1)
    if (value <= 1) {
      setValue(1)
    } else
      dispatch(totalPriceForElementDecrement(price * value))
    dispatch(decreseQuantity(1))
  }

  function increment() {
    setValue(value + 1)
    dispatch(totalPriceForElement(price * value))
    dispatch(increseQuantity(1))
  }

  return (
    <div className="flex items-center justify-space hover:bg-gray-100 -mx-8 md:px-6 px-2 md:py-5 py-1">
      <div className="flex w-2/5 md:w-2/5">
        <div className="md:w-28 w-24 p- 1">
          <img className="h-full w-full object-fit" src={imgSrc} alt="" />
        </div>
        <div className="flex flex-col justify-around ml-4 items-start md:pl-4 pl-0">
          <span className="font-bold md:text-sm text-[12px]">{title}</span>
          <button className="font-semibold hover:text-red-500 text-gray-500 text-xs inline" onClick={() => dispatch(removeItem({productsInCart, title, price}))}> Remove </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <div className="custom-number-input h-10 w-32">
          <label htmlFor="custom-input-number" className="w-full text-gray-700 text-[10px] md:text-sm font-semibold hidden md:block">Counter Input
          </label>
          <div className="flex flex-row h-6 md:h-8 w-[50%] mx-auto rounded-lg relative bg-transparent mt-1">
            <button className="flex items-center bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-12 md:w-20 rounded-l cursor-pointer outline-none m-auto text-2xl font-thin " onClick={() => decrement()}>−
            </button>
            <span className='outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-xs md:text-md flex items-center justify-center text-gray-700 outline-none '>
              {value}
            </span>
            <button className="flex items-center bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-12 md:w-20 rounded-r cursor-pointer m-auto text-2xl font-thin " onClick={() => increment()}>+
            </button>
          </div>
        </div>
      </div>
      <span className="text-center w-1/5 font-semibold text-[11px] md:text-sm ">${price}</span>
      <span className="text-center w-1/5 font-semibold text-[11px] md:text-sm ">${price * value}</span>
    </div>
  )
}

export default ItemInCart