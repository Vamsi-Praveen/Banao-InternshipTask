import { LogOut, UserPlus } from 'lucide-react'
import React, { useState } from 'react'

const Navigation = () => {
    const items = [
        "All Posts(32)",
        "Article",
        "Event",
        "Education",
        "Job"
    ]
    const [join, setJoin] = useState(false)
    return (
        <>
            <div className='md:hidden flex items-center justify-between'>
                <h1 className='font-bold text-xl'>Posts(32)</h1>
                <div className='flex items-center justify-center rounded-sm bg-gray-100 border border-gray-200 p-2 cursor-pointer'>
                    <h1 className='font-medium'>Filter: All</h1>
                </div>
            </div>
            <div className='md:flex flex-col hidden'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3 my-2'>
                        {
                            items.map((item, index) => {
                                return <div key={index}>
                                    <p className={`font-medium ${index == 0 ? 'font-bold text-black' : 'text-gray-600'} relative after:absolute after:w-full after:h-[2px] after:bg-black/80 after:-bottom-1 after:left-0 ${index == 0 ? "after:block" : "after:hidden"} cursor-pointer`} key={index}>{item}</p>
                                </div>
                            })
                        }
                    </div>
                    <div className='flex items-center justify-center gap-4 cursor-pointer'>
                        <div className='bg-[#CED4DA] p-2 rounded-[5px]'>
                            <p>Write a Post</p>
                        </div>
                        {
                            !join ? <div className='bg-[#495DC6] p-2 rounded-[5px] flex items-center justify-center gap-1 cursor-pointer'
                                onClick={() => {
                                    setJoin((prev) => !prev)
                                }}
                            >
                                <UserPlus className='text-white h-5 w-5' />
                                <p className='font-medium text-white'>Join Group</p>
                            </div> :
                                <div className='bg-transparent border border-gray-200 p-2 rounded-[5px] flex items-center justify-center gap-1 cursor-pointer'
                                    onClick={() => {
                                        setJoin((prev) => !prev)
                                    }}
                                >
                                    <LogOut className='text-black h-5 w-5' />
                                    <p className={`font-medium text-black`}>Leave Group</p>
                                </div>
                        }
                    </div>
                </div>
                <div className='h-[1px] w-full bg-gray-300 mt-3' />
            </div >
        </>

    )
}

export default Navigation