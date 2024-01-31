
"use client";
import React, { useState } from 'react';
import { BiDetail } from 'react-icons/bi';

export default function page() {
    const [image, setImage] = useState([])
    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-6 justify-center rounded-xl bg-white w-fit p-10'>
                <h1 className='text-6xl text-[#02184D]'>List Your Property</h1>
                <h2 className='text-3xl'>Add basic details</h2>
                <div className='flex gap-4'>
                    <div className='rounded-3xl border-2 border-[#02184D] flex gap-2 px-4 py-2 items-center'>
                        <input type='radio' name='duty' value='rent' />
                        <label htmlFor='rent'>Rent / Lease</label>
                    </div>
                    <div className='rounded-3xl border-2 border-[#02184D] flex gap-2 px-4 py-2 items-center'>
                        <input type='radio' name='duty' value='sell' />
                        <label htmlFor='sell'>Sell</label>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl'>Add multiple images</h2>
                    <input type='file' multiple onChange={(e) => setImage(e.target.files)} />
                </div>
                <div className='grid grid-cols-3 items-center justify-center'>
                    {
                        Array.from(image).map(item => {
                            return (

                                <img
                                    style={{ padding: '10px' }}
                                    width={150} height={100}
                                    src={item ? URL.createObjectURL(item) : null} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
