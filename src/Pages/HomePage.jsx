import React from 'react'
import FreeDelivery from '../Components/Home/FreeDelivery'
import HeaderImg from '../Components/Home/HeaderImg'
import NewDevices from '../Components/Home/NewDevices'
import HotSallers from '../Components/Home/HotSallers'
import SliderSaller from '../Components/Home/SliderSaller'
import Types from '../Components/Home/Types'
import { motion } from "framer-motion"
import { ToastContainer } from 'react-toastify'


const HomePage = () => {
  
// Run Back to Breakpoint F8
// Run Back to Active Line Ctrl + F5
// Step Back Out Ctrl + Shift + F11
// Step Back Into Ctrl + F11
// Step Back Over Ctrl + F10
// Restart Time Machine (from the first executed line)
// Auto Play Code (from the current line)
// Stop Debugger Shift + F5
// Step Over F10
// Step Into F11
// Step Out Shift + F11
// Run to Active Line F5
// Run to Breakpoint F8

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

      <NewDevices />
      <HotSallers />

      <Types />
      <ToastContainer />

      {/*  */}
    </motion.div>
  )
}

export default HomePage