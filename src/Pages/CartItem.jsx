import React, { useRef } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ItemInCart from '../Components/ItemCart/ItemInCart'
import Payment from '../Components/ItemCart/Payment'

const CartItem = () => {

  const { productsInCart } = useSelector(state => state.productSlice)
  const { quantity } = useSelector(state => state.productSlice)
  const { totalQuantity } = useSelector(state => state.productSlice)
  const { totalPrice } = useSelector(state => state.productSlice)

  let total = 0

  const [showPayment, setShowPayMent] = useState(false)

  const addFirst = useRef()

  const handleShowPayment = () => {
    if (productsInCart.length)
      setShowPayMent(true)
    else
      addFirst.current.innerHTML = 'Please Add Item First!!!'
  }

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <div className="container mx-auto mt-10 relative z-[40]">
      <div className="flex flex-wrap shadow-md my-10">
        <div className="w-full md:w-3/4 bg-white md:px-10 md:py-10 px-6 py-6">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-md md:text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-md md:text-2xl">{productsInCart.length > 0 ? totalQuantity : 0} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-[8px] md:text-xs  uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center text-gray-600 text-[8px] md:text-xs  uppercase w-1/5 ">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-[8px] md:text-xs  uppercase w-1/5 ">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-[8px] md:text-xs  uppercase w-1/5 ">Total Price</h3>
          </div>

          {productsInCart.length > 0 ? productsInCart.map((item, i) => (
            <ItemInCart key={i}
              title={item.title}
              price={item.price}
              imgSrc={item.img}
              desc={item.desc}
              quantity={quantity}
              totalPrice={totalPrice}
              total={total}
            />
          )) : <h2 className='text-3xl text-center py-6'>There Is No Items Plz Add And Back</h2> }

          <Link onClick={() => scrollToTop()} to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" className="w-full md:w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="py-10">
            <label forhtml="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
          </div>
          <button disabled className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${productsInCart.length > 0 ? totalPrice : 0}</span>
            </div>
            <div className="flex font-semibold justify-between mb-4 text-sm uppercase">
              <span>Total Element</span>
              <span>{productsInCart.length > 0 ? totalQuantity : 0}</span>
            </div>
            <button onClick={() => handleShowPayment()} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
            <span ref={addFirst} className='text-red-700 ' ></span>
            {
              showPayment ? <Payment setShowPayMent={setShowPayMent} showPayment={showPayment} /> : ''
            }
          </div>
        </div>

      </div>

      <ToastContainer />

    </div>
  )
}

export default CartItem