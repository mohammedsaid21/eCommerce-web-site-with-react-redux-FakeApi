import React from 'react'
import SignIn from './SignIn';
import CartItem from '../Pages/CartItem';
import Contact from '../Pages/Contact';
import HomePage from '../Pages/HomePage'
import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence}  from "framer-motion"
import Search from '../Pages/Search';

const AnimatedRoutes = () => {

  const location = useLocation()
  
  return (
    <AnimatePresence>

      <Routes location={location} key={location.pathname} >
        <Route path='/' exact element={<HomePage />} />
        <Route path='/cartItem' exact element={<CartItem />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/signin' exact element={<SignIn />} />
        <Route path='/search' exact element={<Search />} />
      </Routes>

    </AnimatePresence>
  )
}

export default AnimatedRoutes