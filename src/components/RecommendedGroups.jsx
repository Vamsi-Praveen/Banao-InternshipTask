import React from 'react'

const RecommendedGroups = () => {
    const groups = [
        "Lesiure", "Activism", "MBA", "Philosophy"
    ]
    return (
        <div>
            <h1 className='text-md font-bold mb-4'>👍&nbsp;Recommended Groups</h1>
            <div className='space-y-4'>
                {
                    groups.map((grp, index) => {
                        return <div className="flex items-center justify-between" key={index}>
                            <div className='flex items-center gap-2'>
                                <img src={`/grp${index}.jpeg`} className='rounded-full h-[40px] w-[40px] object-cover' />
                                <p>{grp}</p>
                            </div>
                            {
                                index == 0 ? <div className='flex items-center justify-center bg-black/80 rounded-full py-2 px-3 cursor-pointer'>
                                    <p className='text-sm text-white'>Followed</p>
                                </div> :
                                    <div className='flex items-center justify-center bg-gray-200 rounded-full py-2 px-3 cursor-pointer'>
                                        <p className='text-sm'>Follow</p>
                                    </div>
                            }

                        </div>
                    })
                }
            </div>
            <p className='text-center text-sm text-[#495dc6] mt-5'>See More...</p>
        </div>
    )
}

export default RecommendedGroups