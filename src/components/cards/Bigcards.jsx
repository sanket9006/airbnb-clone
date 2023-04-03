import Image from 'next/image'
import React from 'react'

const Bigcards = (props) => {
    return (
        <div className='hover:scale-105 transition duration-300 ease-out'>
            <div className='relative h-96 w-96  mb-2'>
                <Image className='rounded-2xl' src={props.img} fill></Image>
            </div>
            <div>
                <h1 className='text-2xl'>{props.title}</h1>
            </div>
        </div>
    )
}

export default Bigcards