import { Calendar, MapPin, Ellipsis, Eye, Share2, BriefcaseBusiness } from 'lucide-react'
import React from 'react'

const FeedAnnounce = ({ image, avatar, title, name, time, location, positive, negative, btnText, category, company }) => {
    return (
        <div className='border border-gray-300 rounded-sm md:w-[85%] w-full overflow-hidden'>
            {image && <img src={image} className='w-full h-[200px] object-cover' />
            }
            <div className='p-5'>
                <p>✍{category}</p>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl md:w-[80%] font-bold'>{title}</h1>
                    <Ellipsis />
                </div>
                <div className='flex items-center gap-10 my-2'>
                    <div className='flex items-center gap-1'>
                        {
                            time && <>
                                <Calendar className='w-4 h-4' />
                                <p className='md:text-base text-sm'>{time}</p>
                            </>
                        }
                        {
                            company && <>
                                <BriefcaseBusiness className='h-4 w-4' />
                                <p>{company}</p>
                            </>
                        }
                    </div>
                    <div className='flex items-center gap-1'>
                        <MapPin className='w-4 h-4' />
                        <p className='md:text-base text-sm'>{location}</p>
                    </div>
                </div>
                <div className='w-full border border-gray-300 rounded-md flex items-cenyer justify-center cursor-pointer py-2'>
                    <p className={`${positive ? 'text-green-400' : negative ? 'text-red-400' : 'text-black'}`}>{btnText}</p>
                </div>
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

export default FeedAnnounce