import Image from 'next/image'
import React from 'react'

const Smallcards = ({ data }) => {
    return (
        <div className='flex space-x-4'>
            <div className='relative w-16 h-16'>
                <Image src={data.img} fill></Image>
            </div>

            <div>
                <p>{data.location}</p>
                <p className='text-gray-500'>{data.distance}</p>
            </div>

        </div>
    )
}

export default Smallcards