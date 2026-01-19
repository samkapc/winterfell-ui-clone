import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='sticky'>
      <div className='flex items-center justify-between px-6 py-2.5'>

        <div className='flex items-center gap-2 color-primary'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" className="text-primary transition-all duration-500" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M 10 6 C 11.544 7.76 12.275797 10.149375 12.216797 12.609375 C 16.184797 14.279375 22.141437 18.73 23.398438 25 L 28 25 C 26.051 14.31 14.918 6.77 10 6 z M 8 13 C 12.67 17.913 8.81 24.582 4 25 L 22.970703 25 C 21.500703 18.289 11.95 13.533 8 13 z"></path></svg>
          <span className='text-white font-doto tracking-[0.1rem] font-[900]'>WINTERFELL</span>
        </div>


        <div className='bg-black rounded-md p-1 flex items-center gap-1 border border-[#262626]'>

          <Button text='Features' />
          <Button text='Pricing' />
          <Button text='Faq' />
          <Button text='About' />

        </div>


        <div className='text-[#C0BDB7] flex items-center gap-4'>

          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="hover:bg-neutral-700/70 hidden md:block rounded-sm p-[4px] h-7 w-7 text-light/70 select-none cursor-pointer transition-transform hover:-translate-y-0.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3 4 9v12h5v-7h6v7h5V9z"></path></svg>

          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="hover:bg-neutral-700/70 hidden md:block rounded-sm p-[4px] h-7 w-7 text-light/70 select-none cursor-pointer transition-transform hover:-translate-y-0.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M404.3 86l-202 202c-1.5 1.5-2.3 3.5-2.3 5.6v26.5c0 4.4 3.6 7.9 7.9 7.9h26.3c2.1 0 4.2-.8 5.7-2.3l202.1-202c3.1-3.1 3.1-8.1 0-11.2L415.5 86c-3.1-3.1-8.1-3.1-11.2 0zM475.6 67l-14.4-14.4-.2-.2c-3.1-2.7-7.2-4.4-11.5-4.4-4.4 0-8.5 1.7-11.6 4.5l-11.3 11.4c-1.5 1.6-1.5 4.1 0 5.6L437 79.9l21.7 21.7c1.6 1.6 4.1 1.6 5.7 0l11.3-11.3c2.8-3.1 4.4-7.1 4.4-11.6-.1-4.4-1.7-8.6-4.5-11.7z"></path><g><path d="M250 342c-3 3-7.1 4.7-11.3 4.7H197.3c-8.8 0-16-7.2-16-16V289.2c0-4.2 1.7-8.3 4.7-11.3l.8-.8 147.6-147.6c2.5-2.5.7-6.8-2.8-6.8H90.7C58.3 122.7 32 149 32 181.4v224c0 32.4 26.3 58.7 58.7 58.7h256c32.4 0 58.7-26.3 58.7-58.7v-209c0-3.6-4.3-5.3-6.8-2.8L250.8 341.2l-.8.8z"></path></g></svg>

          <button className='flex justify-center items-center bg-primary text-white text-sm cursor-pointer transition-transform hover:-translate-y-0.5 rounded-lg px-3 py-2 gap-2'>Sign in

            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-light" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>

          </button>

        </div>

      </div>
    </div>
  )
}

export default Navbar