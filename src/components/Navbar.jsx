import { Search } from 'lucide-react'
import React from 'react'

const Navbar = ({ modal, isLogin }) => {
    return (
        <nav className='py-4 px-10 items-center justify-between border-b border-gray-100 md:flex hidden'>
            < img src='/logo.png' alt='logo' />
            <div className='w-[340px] h-[40px] bg-[#DEE2E6] rounded-[20px] px-3 flex items-center justify-center gap-2'>
                <Search className='w-4 h-4 text-black/70' />
                <input type='text' placeholder='Search for your favorite group in ATG' className='bg-transparent w-full h-full text-black placeholder-black/70 font-medium text-sm' />
            </div>
            {
                isLogin ? <div className='flex items-center gap-2 cursor-pointer'>
                    <img src='/pic4.jpeg' className='h-[40px] w-[40px] rounded-full object-cover'/>
                    <h1 className='font-medium '>Siddarth Goyal</h1>
                </div> : <div className='flex items-center justify-center gap-2'>
                    <p className='text-black font-bold'>Create account.</p>
                    <p className='text-[#495DC6] font-bold cursor-pointer'
                        onClick={() => {
                            modal(true)
                        }}

                    >It's Free</p>
                </div>
            }
        </nav >
    )
}

export default Navbar