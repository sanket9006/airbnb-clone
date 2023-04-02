import Image from 'next/image'
import React from 'react'

const AirbnbBanner = () => {
    return (
        <div className='relative h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-black'>
            <Image
                src="https://picsum.photos/1980/1072"
                fill
            />
            <div className='absolute w-full text-center top-1/2'>
                <p>Not sure where to go ? perfact</p>
                <button className='bg-white text-purple-500 px-7 py-4 mt-2 rounded-full shadow-md hover:shadow-xl transition duration-150 active:scale-90'>I'm flexible</button>
            </div>
        </div>
    )
}

export default AirbnbBanner