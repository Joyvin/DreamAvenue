"use client";
import { BiDetail } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, getDoc, query, onSnapshot, deleteDoc, doc, where } from "firebase/firestore";
import { db, auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 } from 'uuid';

export default function page() {
    const [user] = useAuthState(auth);
    const [images, setImages] = useState([]);
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ title: "", description: "", address: "", price: "" });

    const handleImageChange = (e) => {
        const fileList = e.target.files;
        const imageFiles = Array.from(fileList);
        setImages(imageFiles);
    };

    useEffect(() => {
        if (user) {
            const q = query(collection(db, 'items'), where("userId", "==", user.uid));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                let itemsArr = [];

                querySnapshot.forEach((doc) => {
                    itemsArr.push({ ...doc.data(), id: doc.id });
                });
                setItems(itemsArr);
            });
            return () => unsubscribe();
        }
    }, [user]);

    const addItem = async (e) => {
        e.preventDefault();
        if (newItem.title !== "" || newItem.description !== "" || newItem.address !== "" || newItem.price !== "") {
            await addDoc(collection(db, "items"), {
                title: newItem.title.trim(),
                description: newItem.description.trim(),
                address: newItem.address.trim(),
                price: newItem.price,
                userId: user.uid
            });
            setNewItem({ title: "", description: "", address: "", price: "" });
        }
        const storageRef = ref(storage, 'propertyImages/' + images[0].name + v4());
        const uploadTask = uploadBytesResumable(storageRef, images[0]);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                });
            }
        );
    }

    return (
        <div className='flex items-center justify-center'>
            <form className='flex flex-col gap-4 justify-center rounded-xl bg-white w-fit p-10'>
                <h1 className='text-6xl text-[#02184D]'>Post Your Property</h1>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl'>Add images of your property</h2>
                    <input type='file' multiple onChange={handleImageChange} />
                </div>
                <div className='grid grid-cols-3 items-center'>
                    {
                        images.map(item => {
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
                    <label htmlFor='title'>Title</label>
                    <input value={newItem.title} onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} className='bg-slate-100 h-14 p-4 rounded-lg' type='text' name='title' id='title' placeholder='Enter title' />
                    <label htmlFor='description'>Description</label>
                    <input value={newItem.description} onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} className='bg-slate-100 h-14 p-4 rounded-lg' type='text' name='description' id='description' placeholder='Enter description' />
                    <label htmlFor='address'>Address</label>
                    <input value={newItem.address} onChange={(e) => setNewItem({ ...newItem, address: e.target.value })} className='bg-slate-100 h-14 p-4 rounded-lg border-[3px]' type='text' name='address' id='address' placeholder='Enter address' />
                    <label htmlFor='price'>Price</label>
                    <input value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} className='bg-slate-100 h-14 p-4 rounded-lg border-[3px]' type='number' name='price' id='price' placeholder='Enter price' />
                </div>
                <button onClick={addItem} className='bg-[#f9cb6f] flex gap-2 items-center w-fit rounded-xl p-4' type='submit'>
                    <span>Submit</span>
                    <BiDetail />
                </button>
            </form>
        </div>
    )
}

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='flex justify-center gap-[1rem] pt-4'>
            <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-[#f9cb6f] border-none rounded-[5px] bg-[#f6edda] cursor-pointer' onClick={() => swiper.slidePrev()}>❰</button>
            <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-[#f9cb6f] border-none rounded-[5px] bg-[#f6edda] cursor-pointer' onClick={() => swiper.slideNext()}>❱</button>
        </div>
    )
}