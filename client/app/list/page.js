"use client";
import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { slider3Settings } from "../data/slider3Settings";

export default function Page() {
	const [user] = useAuthState(auth);
	const [properties, setProperties] = useState([]);

	useEffect(() => {
		if (user) {
			const q = query(
				collection(db, "items"),
				where("userId", "==", user.uid)
			);
			const unsubscribe = onSnapshot(q, (querySnapshot) => {
				let propertiesArr = [];
				querySnapshot.forEach((doc) => {
					propertiesArr.push({ ...doc.data(), id: doc.id });
				});
				setProperties(propertiesArr);
			});
			return () => unsubscribe();
		}
	}, [user]);
	return (
		<div className="flex items-center justify-center">
			<div className="flex flex-col gap-4 justify-center rounded-xl bg-white p-10 shadow-lg">
				<h1 className="self-center text-3xl text-[#02184D] font-bold">
					List Your Property
				</h1>
				<div className="self-center flex gap-4">
					<div className="rounded-full border-2 border-[#02184D] flex gap-2 px-4 py-2 items-center">
						<input type="radio" name="duty" value="rent" />
						<label htmlFor="rent">Rent / Lease</label>
					</div>
					<div className="rounded-full border-2 border-[#02184D] flex gap-2 px-4 py-2 items-center">
						<input type="radio" name="duty" value="sell" />
						<label htmlFor="sell">Sell Property</label>
					</div>
				</div>
				<div className="">
					<Swiper {...slider3Settings}>
						<SliderButtons />
						{properties.map((card, i) => (
							<SwiperSlide key={i}>
								<div className="w-40 opp-card hover:scale-[1.025] hover:cursor-pointer flex flex-col items-center gap-[0.6rem] px-[1rem] pt-[1.3rem] m-auto">
									<img
										className="w-40 h-32 rounded-[10%] mb-1"
										src={card.images[0]}
										alt="cardImg"
									/>
									<p className="text-[1.5rem] w-full text-center text-[#f9cb6f] font-bold">
										{card.name}
									</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Description
					</label>
					<input
						value={""}
						onChange={() => {}}
						className="py-2 px-3 w-full border border-gray-300 rounded-lg"
						type="text"
						placeholder="Enter description"
					/>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Title
						</label>
						<input
							value={""}
							onChange={() => {}}
							className="py-2 px-3 w-full border border-gray-300 rounded-lg"
							type="text"
							placeholder="Enter title"
						/>
					</div>
					<div>
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Price
						</label>
						<input
							value={""}
							onChange={() => {}}
							className="py-2 px-3 w-full border border-gray-300 rounded-lg"
							type="number"
							placeholder="Enter price"
						/>
					</div>
				</div>
				<button
					onClick={() => {}}
					className="w-full bg-[#f9cb6f] hover:bg-[#ffbf3e] text-white font-bold py-2 px-4 rounded"
				>
					Submit
				</button>
			</div>
		</div>
	);
}

const SliderButtons = () => {
	const swiper = useSwiper();
	return (
		<div className="relative flex justify-center gap-[1rem] pt-4">
			<button
				className="z-20 absolute bottom-28 left-10 text-[1.2rem] py-[0.2rem] px-[0.8rem] text-[#f9cb6f] border-none rounded-[5px] bg-[#f6edda] cursor-pointer"
				onClick={() => swiper.slidePrev()}
			>
				❰
			</button>
			<button
				className="z-20 absolute bottom-28 right-10 text-[1.2rem] py-[0.2rem] px-[0.8rem] text-[#f9cb6f] border-none rounded-[5px] bg-[#f6edda] cursor-pointer"
				onClick={() => swiper.slideNext()}
			>
				❱
			</button>
		</div>
	);
};
