"use client";
import React, { useState } from 'react';
import { BiDetail } from 'react-icons/bi';

export default function page() {
    const [image, setImage] = useState([])

    //   const handleSubmit = () => {

    //     let formData = new FormData()
    //     formData.append('category', category)
    //     Array.from(image).forEach(item => {
    //       formData.append('products', item)
    //     })
    //     const url = 'http://localhost:5000/image'
    //     axios.post(url, formData).then(result => {
    //       console.log(result)
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   }
    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-6 justify-center rounded-xl bg-white w-fit p-10'>
                <h1 className='text-6xl text-[#02184D]'>Post Your Property</h1>
                <h2 className='text-3xl'>Add basic details</h2>
                <p>You are looking to...</p>
                <div className='flex gap-4'>
                    <div className='rounded-2xl border-2 border-[#02184D] flex gap-2 p-3'>
                        <input type='radio' name='duty' value='rent' />
                        <label htmlFor='rent'>Rent / Lease</label>
                    </div>
                    <div className='rounded-2xl border-2 border-[#02184D] flex gap-2 p-3'>
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
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl'>Property details</h2>
                    <label htmlFor='name'>Name</label>
                    <input className='bg-white h-14 p-4 rounded-lg border-[3px] border-black' type='text' name='name' id='name' placeholder='Enter name' />
                    <label htmlFor='address'>Address</label>
                    <input className='bg-white h-14 p-4 rounded-lg border-[3px] border-black' type='text' name='address' id='address' placeholder='Enter address' />
                    <button className='bg-[#f9cb6f] flex gap-2 items-center w-fit rounded-xl p-4' type='submit'>
                        <span>Submit</span>
                        <BiDetail />
                    </button>
                </div>
            </div>
        </div>
    )
}
