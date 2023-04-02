import Image from 'next/image'
import React from 'react'

const ExploreNearbyCard = ({ data }) => {
    return (
        <div className='flex space-x-4 mb-4 hover:scale-105 transition duration-150 ease-out cursor-pointer'>
            <div className='relative w-16 h-16'>
                <Image className='rounded-lg' src={data.img} fill alt="placeToExplore"></Image>
            </div>

            <div>
                <p>{data.location}</p>
                <p className='text-gray-500'>{data.distance}</p>
            </div>

        </div>
    )
}

export default ExploreNearbyCard