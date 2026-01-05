import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about} alt="about" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>We are a modern fashion destination built for those who value quality, comfort, and timeless style. Our journey began with a simple vision — to create clothing that blends everyday wear with modern elegance. Each collection is thoughtfully curated to reflect current trends while maintaining lasting appeal. We focus on premium fabrics, refined craftsmanship, and perfect fits for every body type.</p>
            <p>From casual essentials to standout pieces, our designs are made to elevate your wardrobe. Customer satisfaction is at the heart of everything we do, from product selection to delivery. We believe fashion should feel confident, accessible, and effortless. Shop with us to experience quality, trust, and style that truly stand out.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to deliver high-quality fashion that empowers confidence and self-expression.We are committed to ethical sourcing, thoughtful design, and consistent quality in every product we create.By combining modern trends with timeless craftsmanship, we aim to make stylish clothing accessible to everyone.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px=10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Qulity Assurance :</b>
            <p className='text-gray-600'>We ensure strict quality checks at every stage, from fabric selection to final packaging.Each product is carefully inspected to meet our standards for durability, comfort, and fit.Our commitment to quality guarantees that every purchase delivers lasting value and confidence.</p>
          </div>
          <div className='border px=10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience :</b>
            <p className='text-gray-600'> We make shopping simple and hassle-free with an easy-to-use platform, secure payments, and smooth navigation.From browsing to checkout, every step is designed to save time and offer a seamless experience.Fast delivery and reliable support ensure convenience you can count on.</p>
          </div>
          <div className='border px=10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service :</b>
            <p className='text-gray-600'>  Our customer service team is dedicated to providing prompt, friendly, and reliable support at every step.From order inquiries to post-purchase assistance, we ensure your questions are answered quickly and effectively.Your satisfaction is our priority, and we strive to make every interaction smooth and reassuring.</p>
          </div>
      </div>
        <NewsletterBox/>
    </div>
  )
}

export default About