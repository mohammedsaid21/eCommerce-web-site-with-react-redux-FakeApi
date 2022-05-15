import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addProductToCart } from '../redux/productSlice'

const Search = () => {
  const search = useSelector(state => state.productSlice.search)
  console.log(search)

  // const {id} = useParams()
  // console.log('url ',id)  

  // let match = useParams();
  // console.log('match', match)

  const dispatch = useDispatch()

  const handleBuy = (e) => {
    let co = 0
    dispatch(addProductToCart({
      id: e.id,
      title: e.title,
      price: e.price,
      img: e.img,
      desc: e.desc,
      quantity: co++,
      catogray: e.catogray,
    }))
    scrollToTop()
  }
  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  const searchItems = search.map(item => (
    <div className='md:w-[45%] mx-auto my-8 flex items-center justify-between py-8 px-4 bg-gray-100 m-2' key={item.id + 10}>
      <img className='md:w-48 md:h-48 w-32 h-32 object-fit' src={item.imgSrc} alt='' />
      <div className='mr- 2 md:mr- 6 text-center'>
        <h3 className='text-md md:text-xl'>{item.title}</h3>
        <h4 className='font-bold text-md md:text-xl'>${item.price}</h4>
      </div>
      <button className='bg-blue-500 text-sm px-4 md:px-7 py-4 md:py-3 text-white rounded-lg transition-all duration-300 hover:bg-blue-700' onClick={() => handleBuy(item)}>Add To Cart</button>
    </div>
  ))
  return (
    <>
      {searchItems.length > 0 ?
        searchItems
        :
        <div className="mt-12 mx-4 px-8 rounded-md border-2 border-red-300 bg-red-50 md:max-w-2xl md:mx-auto my-24">
          <div className="flex justify-between py-3">
            <div className="flex">
              <div className="self-center ml-3">
                <span className="text-red-600 font-semibold">
                  Error
                </span>
                <p className="text-red-600 mt-1">
                  Sorry We Don't Have Your Order Please Make Sure From Your Worlds
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Search