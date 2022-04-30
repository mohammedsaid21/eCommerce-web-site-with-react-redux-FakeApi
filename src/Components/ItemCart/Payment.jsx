import React, { useState } from 'react'
import PayMentCart from './PayMentCart'

const Payment = ({showPayment, setShowPayMent}) => {

  const [showCard, setShowCard] = useState(false)

  return (
    <div>
      { showPayment === true ? 
        ( 
        <PayMentCart showCard={showCard} setShowCard={setShowCard} setShowPayMent={setShowPayMent} /> 
        ) : ''
      }
    </div>
  )
}

export default Payment