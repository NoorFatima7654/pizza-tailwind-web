import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center m-10 mb-0'>
      <nav className='flex justify-center flex-wrap gap-6 text-state-500 font-medium bg-gradient-to-r from-black to-state-700'>
      <a className='hover:text-cyan-500 text-amber-500' href='#'> Home </a>
      <a className='hover:text-cyan-500 text-amber-500' href='#'> About </a>
      <a className='hover:text-cyan-500 text-amber-500' href='#'> Delivery </a>
      <a className='hover:text-cyan-500 text-amber-500' href='#'> Contact </a>
      </nav>



      <div className='flex justify-center space-x-5 transition-transform duration-500 rase-in-out transform haver:scale-105'>
       
        <a href='https://facebook.com' target='blank' rel='nofollow noonpener'>
        <Image src="/images/fblogo.png"  alt="facebook logo"
        height={50}
        width={50}/>
        </a>
        <a href='https://linkedin.com' target='blank' rel='nofollow noonpener'>
        <Image src="/images/linklogo.png" alt="linkedin logo"
        height={50}
        width={50}/>
        </a>

        <a href='https://instagram.com' target='blank' rel='nofollow noonpener'>
        <Image src="/images/instalogo.png" alt="instagram logo"
        height={50}
        width={50}/>
        </a>
       
        <a href='https://twitter.com' target='blank' rel='nofollow noonpener'>
        <Image src="/images/twitlogo.png" alt="twitter logo"
        height={50}
        width={50}/>
        </a>
    
        </div>

<p className='text-center haver:text-cyan-600 text-amber-400 font-medium mb-8'> 2024 Noor Fatima.All Rights Reserved.</p>
 <br  />
 <br  />
 <br  />
</footer>
  
    </div>
  )
}
