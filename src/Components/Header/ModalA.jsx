import React, { useState } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { insertProduct } from '../../redux/productSlice'

const ModalA = ({ state, setState }) => {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')
  const [imgSrc, setImgSrc] = useState('')
  const [category, setCategory] = useState('new-Devices')

  // في طريقة تانية انه اعمل اوبجيكت اسميه داتا مثلا واحط جوا عناصر زي التايتل والبرايس والباقيات بس المهم اعرفه جوا ال سبميت انفو

  const dispatch = useDispatch()
  const onlySpaces = (str) => str.trim().length > 0
  const alert = useRef()

  // const pushData = async () => {
  //   const dataProduct = {title, price, desc, imgSrc, category}
  //     try {
  //         const res = await fetch("https://localhostworklaptest.sharedwithexpose.com/work/lap/test/public/api/products", {
  //           method: "POST",
  //           body: JSON.stringify(dataProduct),
  //           headers: {
  //             "Content-type": "application/json; charset=UTF-8",
  //           },
  //         });
  //         console.log(dataProduct)
  //         const data = await res.json();
  //         return data;
  //       } catch (error) {
  //         return error.message
  //         // return rejectedWithValue(error.message);
  //       }
  // }

  const submitInfo =  (e) => {
    e.preventDefault()
    
    if(onlySpaces(title) && onlySpaces(price) && onlySpaces(imgSrc) ) {

      console.log(imgSrc)
      setState(false)
      setCategory(selectItem.current.value)
      dispatch(insertProduct({title, price, desc, imgSrc, category}))
      alert.current.innerHTML = ''

      // pushData()
      
    }
    else {
      alert.current.innerHTML = 'Please Enter Title & Price & Img Src At Least And Please Choose The Catogray'
    }

    setTitle('')
    setPrice('')
    setDesc('')
    setImgSrc('')
    // i++
  }

  const styleInput = 'w-full py-2 pl-10 pr-2 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 mb-2';

  const selectItem = useRef()

  return (
    <>
      {state ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className={`relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg  `}>
            <form  onSubmit={() => submitInfo()} className="max-w-md px-4 mx-auto mt-12">
              <div>
                <input type="text" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)} className={styleInput}/>
                <input type="text" placeholder="Price" required value={price} onChange={(e) => setPrice(e.target.value)} className={styleInput}/>
                <input type="text" placeholder="Img Src" value={imgSrc} onChange={(e) => setImgSrc(e.target.value)}  className={styleInput}/>
                <input type="text" placeholder="Desc" required value={desc} onChange={(e) => setDesc(e.target.value)} className={styleInput}/>
                <select ref={selectItem} name="category" id="category">
                  <option value="new-Devices">newDevices</option>
                  <option value="Hot-Sallers">HotSallers</option>
                </select>
              </div>
              <input onClick={submitInfo} type='submit' className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"/>
            </form>
            <span className='text-red-800 text-[14px] mt-3 mx-auto w-[85%] block' ref={alert}></span>
              <div className="items-center gap-2 mt-3 sm:flex">
                <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2 bg-gray-100"
                  onClick={() => setState(false)}
                >
                  Undo
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : ''
      }
    </>
  )
}

export default ModalA

    //   <Modal isOpen={product} onRequestClose={closeModal} 
    //   className='bg-white  rounded-2xl w-[580px] h-[560px] md:w-[550px] md:h-[480px] fixed right-1/2 md:top-[42%] top-[60%] -translate-y-1/2 translate-x-1/2 shadow-2xl '
    //   style={ {
    //     overlay: {
    //       background: '#000000aa', position: 'fixed', width:'100%', height:'100%',zIndex:'100',
    //   }, 
    //   }} 
    //      >

    //       <h2>Hello World</h2>
    // </Modal>
    
