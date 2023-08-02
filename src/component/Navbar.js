import React, { useState } from 'react';
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose}  from 'react-icons/ai';
import {FaBars, FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa';


export default function Navbar() {
    const [nav,setNav] = useState(false);
    const [logo,setLogo] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
        setLogo(!logo)
    }
  return (
    <>
        <div className=' flex justify-between items-center h-20 px-4 absolute text-white w-full z-10'>
        <div >
            <h1 className={logo ? 'hidden' :'block'} onClick={handleNav}>BEACHES.</h1>
        </div>
        <ul className='hidden md:flex px-[100px] font-bold text-xl  '>
            <li className=''>Home</li>
            <li className=''>Destination</li>
            <li className=''>Travel</li>
            <li className=''>View</li>
            <li className=' '>Book</li>
        </ul>
           <div className='hidden md:flex'>
           <BiSearch size={25} className='mr-2'/>
            <BsPerson size={25}/>
           </div> 

           {/* humberger */}
           <div className='md:hidden flex z-10' onClick={handleNav}>
           {nav? <AiOutlineClose size={25} className='text-black'/>:<FaBars size={25}/>}
           
            
           </div>
           {/* mobile menu */}

           <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
           <ul className=''>
           <h1>BEACHES.</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destination</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>View</li>
            <li className='border-b '>Book</li>
           <div className='flex flex-col'>
           <button className='my-6'>Search</button>
            <button>Account</button>
           </div>
           <div className='flex justify-between my-6'>
            <FaFacebook className='icon'/>
            <FaTwitter className='icon'/>
            <FaInstagram className='icon'/>
            <FaYoutube className='icon'/>
            <FaPinterest className='icon'/>
           </div>
        </ul>
           </div>
        </div>
    </>
  )
}
