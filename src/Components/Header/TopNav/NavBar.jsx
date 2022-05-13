import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from './TopNav'
import { AiOutlineHeart } from 'react-icons/ai'
import Header from '../Header'
import { useDispatch, useSelector } from 'react-redux'
import SignIn from '../../SignIn'
import { backTheme, searchItem } from '../../../redux/productSlice'
const NavBar = () => {
  // const {totalQuantity} = useSelector((state) => state.cart)

  const totalQuantity = useSelector(state => state.productSlice.totalQuantity)
  const { productsInCart } = useSelector(state => state.productSlice)

  const [fixed, setFixed] = useState('')
  const [showCart, setShowCart] = useState('')
  const [hideBtn, setHideBtn] = useState('hidden') // to hide the button -> 'X'
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const nav = useNavigate()
  const navigate = useNavigate()
  const navigateToHome = useNavigate()


  const scrollAnimation = () => {
    if (window.pageYOffset > 180) {
      setFixed('header-fixed shadow-nav')
    } else {
      setFixed('')
    }
  }


  const moveToHome = () => {
    navigateToHome('/')
    scrollToTop()
  }

  const moveToCart = () => {
    navigate('/cartItem')
    if (window.pageYOffset > 0) {
      scrollToTop()
    }
  }

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  
  // setHideBtn('hidden')

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation);
    if (productsInCart.length > 0) { 
     setShowCart('cart-product');
     setHideBtn('')
    }
    return () => window.removeEventListener('scroll', scrollAnimation)
  }, [productsInCart.length]);

  const getValue = (e) => {
    const onlySpaces = (str) => str.trim().length > 0
    if (search !== '' && onlySpaces(search)) {
      dispatch(searchItem(search))
      nav('/search')
      scrollToTop()
      setSearch('')
    }
  }

  return (
    <div className=''>
      <TopNav />
      <div className='container mx-auto py-8'>
        {/* Logo */}

        <div className={`flex items-center justify-between w -[80%] md:w-full py-5 px-4 md:px-[94px] ${fixed}`}>
          <button onClick={() => moveToHome()} className='md:text-3xl text-xl text-[#0e8ce4] cursor-pointer font-semibold '>Market</button>
          <div className="flex justify-center items-center">
            <div className="relative md:block hid den">
              <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="bg-gray-100 h-10 w-32 md:text-xl text-[12px] md:w-96 md:pl-10 md:pr-20 px-4 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything..." />
              <div className="absolute top-2 right-2">
                <button onClick={() => getValue()} className="h-8 md:w-20 w-12 text-white rounded-lg bg-[#0e8ce4] hover:bg-[#057ed4] md:text-sm text-[12px] md:py-[6px] md:px-3 px-1 py-1 -mt-1 show-div">Search
                  <h5 className='absolute hidden top-10 -right-10 bg-gray-100 py-2 px-4 rounded-xl border-[1px] border-[#555] w-64 text-[13px] text-black'>Search With The Name Of Product</h5>
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='flex items-center justify-end md:justify-between w-1/4'>
            <p className='hidden md:flex items-center text-sm md:text-xl cursor-pointer hover:text-[#0e8ce4] '><AiOutlineHeart className='text-3xl' /> Wishlist</p>
            <div>
              <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700 relative">
                <button onClick={() => moveToCart()} className="relative flex">
                  <svg className="flex-1 w-8 h-8 fill-current " viewBox="0 0 24 24">
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                  </svg>
                  <span className="absolute right-0 top-0 rounded-full bg-[#0e8ce4] w-[18px] h-[18px] top right p-0 m-0 text-white font-mono text-sm leading-tight text-center"> {productsInCart.length > 0 ? totalQuantity : 0} </span>
                </button>
<div className={`${showCart}`} >
                  <span onClick={() => setShowCart('hidden') } className={`text-2xl font-bold cursor-pointer ${hideBtn} `}> &times; </span>
                  {
                    productsInCart.map(item => (
                      <div key={item.id}>
                        <h3>{item.title}</h3>
                        <h5>{item.price}</h5>
                        <img src={item.imgSrc} alt='' />
                      </div>
                    ))
                  }
                </div>
              </li>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <Header />
    </div>
  )
}

export default NavBar 