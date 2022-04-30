import React, { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { sucsessOperation } from '../../redux/productSlice'

const PayMentCart = (props) => {
  const [cardHolder, setCardHolder] = useState('')
  const [cardNumber, setCardNumber] = useState('')

  const {totalPrice} = useSelector(state => state.productSlice)

  const options1 = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '3' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' }
  ]

  const options2 = [
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' }
  ]


  const [done, setDone] = useState(false)

  const alert = useRef()

  const onlySpaces = (str) => str.trim().length > 0

   const [sucses, setSucses] = useState(false)

  const sucsessPayment = () => {
    if (onlySpaces(cardHolder) && onlySpaces(cardNumber) && cardNumber.length >= 16) {
      setDone(true)
      alert.current.innerHTML = ''
    }
    else
      alert.current.innerHTML = 'Please Enter Any Number And Name (make Sure the card Number is 16 )'
      setSucses('animation-card')
  }

  const home = document.querySelector('.publish-heart')
  
  if (done) {
    const parentHeart = document.createElement("div");
    home.append(parentHeart);

    const createRandomHeart = setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "&#129505;";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${ (Math.random() + 0.5)  * 1.5}s  `
    
      parentHeart.append(heart);
    }, 70);
  
    setTimeout(() => {
      clearInterval(createRandomHeart);
    }, 2300);
  
    setTimeout(() => {
      parentHeart.remove();
    }, 5000);
  }

  const dispatch = useDispatch()
  const sucsessOpe = () => {
    dispatch(sucsessOperation())
  }


  return (
    <div className="fixed inset-0 z-10 overflow-y-auto publish-heart">
      <div className="fixed inset-0 w-full h-full bg-black opacity-50"></div>
      {
        done ?
          <div className="flex items-center min-h-screen px-4 py-8 ">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                <path fill="currentColor"
                  d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                </path>
              </svg>
              <div className="text-center">
                <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done! You Payed ${totalPrice}</h3>
                <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                <p> Have a great day!  </p>
                <div className="py-10 text-center">
                  <Link onClick={() => sucsessOpe()} to='/' className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    GO BACK
                  </Link>
                </div>
              </div>
            </div>
          </div>
          :
          <div className={`flex items-center min-h-screen px-4 py-8 ${sucses}`} >
            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="mx-auto w-[90%]">
                <ul className="flex justify-center my-8">
                  <li className="mx-2">
                    <img className="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" />
                  </li>
                  <li className="mx-2">
                    <img className="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" />
                  </li>
                  <li className="ml-5">
                    <img className="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" />
                  </li>
                </ul>
                <div className="mt-2 text-center">
                  <h4 className="text-lg font-medium text-gray-800">
                    Card payment
                  </h4>
                  <div className="my-3">
                    <input type="text" className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" placeholder="Card holder" maxLength="16" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
                  </div>
                  <div className="my-3">
                    <input type="text" className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" placeholder="Card Number" maxLength="16" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                  </div>
                  <span className='text-red-700 text-left block ml-4 text-[14px]' ref={alert}></span>
                  {/*  */}
                  <div className="my-3 flex flex-col">
                    <div className="mb-2">
                      <label className="text-gray-700">Expired</label>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <Select options={options1} />
                      <Select options={options2} />
                      <input type="text" className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" placeholder="Security code" maxLength="3" x-model="securityCode" />
                    </div>
                  </div>
                </div>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() => sucsessPayment()}
                  >
                    Pay Now ${totalPrice}
                  </button>
                  <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() => {
                      props.setShowCard(false)
                      props.setShowPayMent(false)
                    }
                    }
                  >
                    Undo
                  </button>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default PayMentCart