import React, { useEffect } from 'react'
import FreeDelivery from '../Components/Home/FreeDelivery'
import HeaderImg from '../Components/Home/HeaderImg'
import NewDevices from '../Components/Home/NewDevices'
import HotSallers from '../Components/Home/HotSallers'
import SliderSaller from '../Components/Home/SliderSaller'
import Types from '../Components/Home/Types'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/productSlice'
import { motion } from "framer-motion"

const HomePage = () => {
  const { products } = useSelector(state => state.productSlice)
  const dispatch = useDispatch()

  const addItem = products.map((item) => (
      item.title
  ))

  useEffect(() => {
    dispatch(getProducts(addItem))
  }, [dispatch])

  const newDevices = products.filter(product1 => product1.category === "newDevices")
  const hotSallers = products.filter(product1 => product1.category === "HotSallers")

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100vw' }}
      exit={{ x: window.innerWidth }}
    >
      <HeaderImg />
      {/*  */}
      <FreeDelivery />
      {/* End */}
      <SliderSaller />
      {/*  */}
      <NewDevices newDevices={newDevices} />

      {/* <OrederNew /> */}

      <HotSallers hotSallers={hotSallers} />

      <Types />
      {/*  */}
    </motion.div>
  )
}

export default HomePage