"use client";
import { useState } from "react";
import { BiDetail } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { db, auth } from "../firebase";
import { contractInstance } from "../components/ContractConnect";

export default function Page() {
	const [user] = useAuthState(auth);
	const [images, setImages] = useState([]);
	const [file, setFile] = useState([]);
	const [newItem, setNewItem] = useState({
		name: "",
		area: "",
		bhk: "",
		address: "",
		apartType: "",
	});

	const handleImageChange = (e) => {
		const fileList = e.target.files;
		const imageFiles = Array.from(fileList);
		setImages(imageFiles);
	};

	const handleFileChange = (e) => {
		const fileList = e.target.files;
		const myFiles = Array.from(fileList);
		setFile(myFiles);
	};

	const uploadImages = async () => {
		const storage = getStorage();
		const downloadURLs = [];

		for (const image of images) {
			const storageRef = ref(
				storage,
				`propertyImages/${uuidv4()}_${image.name}`
			);
			const uploadTask = uploadBytesResumable(storageRef, image);

			await new Promise((resolve, reject) => {
				uploadTask.on("state_changed", null, reject, () => {
					getDownloadURL(uploadTask.snapshot.ref)
						.then((url) => {
							downloadURLs.push(url);
							resolve();
						})
						.catch(reject);
				});
			});
		}

		return downloadURLs;
	};

	const uploadFile = async () => {
		const storage = getStorage();
		const downloadURL = [];
		const storageRef = ref(
			storage,
			`propertyImages/${uuidv4()}_${file.name}`
		);
		const uploadTask = uploadBytesResumable(storageRef, file);
		await new Promise((resolve, reject) => {
			uploadTask.on("state_changed", null, reject, () => {
				getDownloadURL(uploadTask.snapshot.ref)
					.then((url) => {
						downloadURL.push(url);
						resolve();
					})
					.catch(reject);
			});
		});

		return downloadURL;
	};

	const addItem = async (e) => {
		e.preventDefault();
		if (
			newItem.name !== "" ||
			newItem.area !== "" ||
			newItem.bhk !== "" ||
			newItem.address !== "" ||
			newItem.apartType !== ""
		) {
			const downloadURLs = await uploadImages();
			const downloadURL = await uploadFile();
			const itemData = {
				name: newItem.name.trim(),
				area: newItem.area.trim(),
				bhk: newItem.bhk.trim(),
				address: newItem.address.trim(),
				apartType: newItem.apartType,
				userId: user.uid,
				images: downloadURLs,
				file: downloadURL,
			};

			const json = JSON.stringify(itemData);
			const tokenID = await contractInstance.mint(json).callStatic();

			itemData["tokenid"] = 0;

			await addDoc(collection(db, "items"), itemData);
			setNewItem({
				name: "",
				area: "",
				bhk: "",
				address: "",
				apartType: "",
			});
			setImages([]);
			setFile([]);
		}
	};

	return (
		<div className="flex items-center justify-center">
			<form className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
				<h1 className="text-3xl text-center font-semibold text-gray-800 mb-6">
					Add Your Property
				</h1>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Add title deed
					</label>
					<input
						type="file"
						onChange={handleFileChange}
						className="py-2 px-3 w-full border border-gray-300 rounded-lg"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Add images of your property
					</label>
					<input
						type="file"
						multiple
						onChange={handleImageChange}
						className="py-2 px-3 w-full border border-gray-300 rounded-lg"
					/>
				</div>
				<div className="grid grid-cols-3 gap-4">
					{images.map((item, index) => (
						<img
							key={index}
							style={{ padding: "10px" }}
							width={150}
							height={100}
							src={URL.createObjectURL(item)}
							className="object-cover rounded-lg"
							alt={`Image ${index + 1}`}
						/>
					))}
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Property Name
					</label>
					<input
						value={newItem.name}
						onChange={(e) =>
							setNewItem({ ...newItem, name: e.target.value })
						}
						className="py-2 px-3 w-full border border-gray-300 rounded-lg"
						type="text"
						placeholder="Enter name"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Area in sq. ft.
					</label>
					<input
						value={newItem.area}
						onChange={(e) =>
							setNewItem({ ...newItem, area: e.target.value })
						}
						className="py-2 px-3 w-full border border-gray-300 rounded-lg"
						type="text"
						placeholder="Enter area"
					/>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label className="block text-gray-700 text-sm font-bold mb-2">
							BHK
						</label>
						<input
							value={newItem.bhk}
							onChange={(e) =>
								setNewItem({ ...newItem, bhk: e.target.value })
							}
							className="py-2 px-3 w-full border border-gray-300 rounded-lg"
							type="text"
							placeholder="Enter bhk"
						/>
					</div>
					<div>
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Apartment Type
						</label>
						<select
							value={newItem.apartType}
							onChange={(e) =>
								setNewItem({
									...newItem,
									apartType: e.target.value,
								})
							}
							className="py-2 px-3 w-full border border-gray-300 rounded-lg"
						>
							<option value="">Select</option>
							<option value="Apartment">Apartment</option>
							<option value="Independent House">
								Independent House
							</option>
							<option value="Villa">Villa</option>
						</select>
					</div>
				</div>
				<div className="mb-4 mt-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Address
					</label>
					<input
						value={newItem.address}
						onChange={(e) =>
							setNewItem({ ...newItem, address: e.target.value })
						}
						className="py-2 px-3 w-full border border-gray-300 rounded-lg"
						type="text"
						placeholder="Enter address"
					/>
				</div>
				<button
					onClick={addItem}
					className="w-full bg-[#f9cb6f] hover:bg-[#ffbf3e] text-white font-bold py-2 px-4 rounded"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
