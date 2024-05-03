import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'

const Banner = () => {
    const [grp, setGrp] = useState(false)
    return (
        <div className="w-full md:h-[500px] h-[350px] bg-banner bg-cover bg-center flex items-end">
            <div className='md:hidden absolute w-full top-4'>
                <div className='flex items-center justify-between px-4'>
                    <ArrowLeft className='text-white' />

                    <div className='border border-white rounded-md px-2 py-1'
                        onClick={() => {
                            setGrp(prev => !prev)
                        }}
                    >
                        <p className='text-white font-light text-sm'>{!grp ? 'Join Group' : "Leave Group"}</p>
                    </div>
                </div>

            </div>
            <div className='h-[30%] md:mx-40 mx-4 space-y-1'>
                <h1 className='font-bold text-white md:text-4xl text-2xl'>Computer Engineering</h1>
                <p className='font-light text-white md:text-md text-base'>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    )
}

export default Banner