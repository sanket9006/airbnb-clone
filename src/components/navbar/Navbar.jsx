import Image from 'next/image'
import React from 'react'
import { GlobeAltIcon, MenuAlt1Icon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'

const Navbar = () => {
    return (
        <header className='bg-white grid grid-cols-3 shadow-md p-3 sticky top-0'>
            {/* Left */}
            <div className='px-2'>
                <Image src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" height={100} width={100} />
            </div>

            {/* Middle */}
            <div className='flex border-2 rounded-full my-auto justify-between h-10 items-center md:shadow-sm'>
                <input className='ml-4 flex-grow placeholder-gray-400 text-gray-600 outline-none' placeholder='Enter place name .....'></input>
                <SearchIcon className="rounded-full cursor-pointer bg-red-400 color-red-300 h-6 text-white p-1 mr-3" />
            </div>

            {/* Right */}
            <div className='flex items-center justify-end space-x-3'>
                <p className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-full'>Airbnb your home</p>

                <button className='hover:bg-gray-100 rounded-full p-2'>
                    <GlobeAltIcon className='h-6' />
                </button>

                <div className='flex space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-md'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>

        </header>
    )
}

export default Navbar