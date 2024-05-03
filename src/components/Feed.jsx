import { Ellipsis, Eye, Share2 } from 'lucide-react'
import React from 'react'

const Feed = ({ image, avatar, title, name, category }) => {
    return (
        <div className='border border-gray-300 rounded-sm md:w-[85%] w-full overflow-hidden'>
            <img src={image} className='w-full h-[200px] object-cover' />
            <div className='p-5'>
                <p>✍ {category}</p>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl md:w-[80%] font-bold'>{title}</h1>
                    <Ellipsis />
                </div>
                <p className='text-sm text-black/70'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center gap-2'>
                        <img src={avatar} className='w-[40px] h-[40px] object-cover rounded-full' />
                        <h3>{name}</h3>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-1'>
                            <Eye className='w-5 h-5 md:block hidden' />
                            <p className='text-sm'>1.4K Views</p>
                        </div>
                        <div className='p-2 bg-gray-300 rounded-md text-black cursor-pointer'>
                            <Share2 className='w-5 h-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed