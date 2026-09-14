import React from 'react'
import joinBg from "../assets/joinBg.jpg"
import arrow from "../assets/arrow_right.svg"

const Cta = () => {
  return (
    <main className='lg:h-[90svh] w-full flex p-10 my-4'>

        {/* LEFT */}
        <div className="left-side flex flex-col justify-center gap-1 lg:gap-2 lg:p-8 w-full lg:flex-1">

        {/* TEXT */}
            <h3 className='text-text text-lg font-bold'>READY TO LEVEL UP <span className='text-primary'>?</span></h3>
            <h1 className='text-4xl sm:text-6xl lg:text-8xl text-text font-teko uppercase leading-8 sm:leading-12 lg:leading-20'>Your Next Level Starts Here</h1>
            <p className='sm:text-lg text-muted leading-tight'>Stop waiting for motivation. Start building the body, discipline, and strength you've been chasing.</p>

        {/* BUTTON */}
        <div className='flex items-center gap-4 mt-4'>
            <button className='bg-primary shadow-lg shadow-primary/20 text-lg lg:text-2xl lg:py-2 px-4 lg:px-6 flex items-center justify-center gap-2 leading-10 rounded'>
                <p className='font-black'>Join MuscleLab</p>
                <img src={arrow} alt="arrow" className='h-4 lg:h-6' />
            </button>
        </div>

        </div>

        {/* RIGHT */}
        <div className="hidden lg:block right-side w-[45%] h-full p-10">
            <img src={joinBg} alt="joinBg" className='h-full w-full'  />
        </div>

    </main>
  )
}

export default Cta