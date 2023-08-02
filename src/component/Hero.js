import React from 'react';
import Beach from '../assests/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai';

export default function Hero() {
  return (
    <>
        <div className='w-full h-screen relative'>
       <video src={Beach} className='w-full h-full object-cover' autoPlay loop muted />
       <div className='absolute w-full h-full top-0 left-0 bg-gray-900/10'>
       <div className='absolute w-full h-full top-0 flex flex-col justify-center text-center text-white p-4'>
        <h1>First Class Travel</h1>
        <h2 className='py-4'>Top 1% location WorldWide.</h2>
        <form className='flex justify-between border rounded-md text-black bg-gray-100/90 items-center max-w-[700px] mx-auto w-full p-1'>
            <div>
            <input type='text' placeholder='Search Destinations' className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none'/>
            </div>
            <div>
            <button><AiOutlineSearch size={20} className='icon text-white' style={{color:'#ffffff'}}/></button>
            </div>
        </form>
       </div>

       </div>
        </div>
    </>
  )
}
