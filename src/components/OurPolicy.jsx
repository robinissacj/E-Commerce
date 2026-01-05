import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-y-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div>
        <img src={assets.exchange} className='w-12 m-auto mb-5' alt="exchange" />
        <p className='fornt-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>Quick, hassle-free exchanges for all items.</p>
      </div>
      <div>
        <img src={assets.guarantee} className='w-12 m-auto mb-5' alt="exchange" />
        <p className='fornt-semibold'>7 Day Easy Returns Policy</p>
        <p className='text-gray-400'>Changed your mind? Return it within 7 days.</p>
      </div>
      <div>
        <img src={assets.customer_support} className='w-12 m-auto mb-5' alt="exchange" />
        <p className='fornt-semibold'>24/7 Customer Support</p>
        <p className='text-gray-400'>Real support available anytime you need help.</p>
      </div>

    </div>
  )
}

export default OurPolicy