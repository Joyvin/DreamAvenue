import React from 'react'

export default function Landing() {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div className='flex flex-col w-[566px]'>
                <img src="/logo.png" alt="" className="h-[199px] w-full" />
                <p className='text-[#BCA875] text-3xl font-normal w-full px-12 leading-loose'>"Welcome to Dream Avenue! Discover dream homes and investment properties effortlessly. Find your perfect property or rental, connect with our community, and turn your dreams into reality today."</p>
                </div>
                <img src="/landing.png" alt="" className="h-[700px] w-[1072px]" />
            </div>
        </div>
    )
}
