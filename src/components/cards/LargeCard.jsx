import Image from 'next/image'
import React from 'react'

const LargeCard = (props) => {
    return (
        <section>
            <div className='p-8 relative'>
                <div className='relative h-96 min-w-[300px]'>
                    <Image src={props.img} fill className='rounded-lg object-cover' />
                </div>
                <div className='absolute top-[60px] px-6'>
                    <h2 className='text-4xl w-64 mb-4'>{props.title}</h2>
                    <p className='mb-3'>{props.description}</p>
                    <button className='bg-black text-gray-100 px-4 py-2 rounded-lg hover:scale-105 transition duration-200 ease-out'>{props.buttonText}</button>
                </div>
            </div>
        </section>
    )
}

export default LargeCard