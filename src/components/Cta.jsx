import React from 'react'
import joinBg from "../assets/joinBg.jpg"
import arrow from "../assets/arrow_right.svg"

const Cta = () => {
  return (
    <main className='h-[90svh] w-full flex p-10 border border-white'>

        {/* LEFT */}
        <div className="left-side flex flex-col justify-center gap-2 p-8 flex-1">

        {/* TEXT */}
            <h3 className='text-text text-lg font-bold'>READY TO LEVEL UP <span className='text-primary'>?</span></h3>
            <h1 className='text-8xl text-text font-teko uppercase leading-20'>Your Next Level Starts Here</h1>
            <p className='text-lg text-muted leading-tight'>Stop waiting for motivation. Start building the body, discipline, and strength you've been chasing.</p>

        {/* BUTTON */}
        <div className='flex items-center gap-4 mt-4'>
            <button className='bg-primary shadow-lg shadow-primary/20 text-4xl font-teko py-2 px-6 flex items-center justify-center gap-2 leading-10 rounded'>
                <p>Join MuscleLab</p>
                <img src={arrow} alt="arrow" className='h-6' />
            </button>
            <p className='text-text'>Start your journey today.</p>
        </div>

        </div>

        {/* RIGHT */}
        <div className="right-side w-[45%] h-full p-10">
            <img src={joinBg} alt="joinBg" className='h-full w-full'  />
        </div>

    </main>
  )
}

export default Cta