import React from 'react'

export const Footer = () => {
  return (
        <div className='flex flex-row justify-center items-center '>
        <div className=" h-[530px] flex flex-col content-center items-center rounded-xl w-[98%] bg-white-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
          <span className='w-[80%] mt-4 border-b-[4px] rounded'>
        </span>
        <span className='w-[80%] mt-12 flex flex-row flex-wrap content-center justify-between '>
          <span className='m-3'>
            <h2 className='text-xl font-bold mb-3'>COMPANY</h2>
            <p className='mt-2'>About us</p>
            <p className='mt-2'>Partner With us</p>
            <p className='mt-2'>Blog</p>
          </span>
          <span className='m-3'>
            <h2 className='text-xl font-bold mb-3'>LEGAL</h2>
            <p className='mt-2'>Privacy Policy</p>
            <p className='mt-2'>Terms of use</p>
          </span>
          <span className='m-3'>
            <h2 className='text-xl font-bold mb-3'>CONTACT</h2>
            <p className='flex flex-row mt-2'><img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEmailIcon.58cee685.png&w=32&q=75" alt="" /> hi@zetapp.in</p>
            <p className='flex flex-row mt-2'><img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPhoneIcon.dcc030db.png&w=32&q=75" alt="" /> +91-7417274072</p>
          </span>
    
          <span className='m-3'>
            <h2 className='text-xl font-bold mb-3'>SOCIAL</h2>
            <span className='flex flex-row gap-2 '>
              <img src="https://zetapp.in/_next/static/media/linkedin.99e56649.svg" alt="" />
              <img src="https://zetapp.in/_next/static/media/instagram.146ba33a.svg" alt="" />
              <img src="https://zetapp.in/_next/static/media/facebook.cccadfff.svg" alt="" />
              <img src="https://zetapp.in/_next/static/media/TelegramImg.2d51b03f.svg" alt="" />
              <img src="https://zetapp.in/_next/static/media/WhatsappImg.a5c0a9a6.svg" alt="" />
            </span>
          </span>
        </span>
      </div>

        </div>
  )
}



