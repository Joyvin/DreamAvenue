"use client";
import { data } from "autoprefixer";
import React, { useState } from "react";
import axios from "axios";

export default function KYC() {
	const [aadNo, setAadNo] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
	]);
	const [otpGen, setOtpGen] = useState(false);
	const [otp, setOtp] = useState(["", "", "", "", "", ""]);

	const moveBox = (index, e) => {
		let key = e.key;
		if (key === "Enter") {
			const foundElement = aadNo.findIndex((element) => element === "");
			console.log(index + 1 === aadNo.length);
			if (foundElement !== -1 && index + 1 !== aadNo.length) {
				document.getElementById(`${index + 1}`).focus();
			} else if (foundElement !== -1 && index + 1 === aadNo.length) {
				console.log(foundElement);
				document.getElementById(`${foundElement}`).focus();
			} else {
				e.target.blur();
			}
		}
	};

	const editValue = (index, e) => {
		let val = e.target.value;
		let d = aadNo;
		d[index] = parseInt(val);
		setAadNo(d);
	};

	const genOtp = async () => {
		const aN = aadNo.join("");
		axios.post("/api/genOtp", { aN: aN });
	};

	const moveBoxOtp = (index, e) => {
		let key = e.key;
		if (key === "Enter") {
			const foundElement = aadNo.findIndex((element) => element === "");
			console.log(index + 1 === aadNo.length);
			if (foundElement !== -1 && index + 1 !== aadNo.length) {
				document.getElementById(`${index + 1}`).focus();
			} else if (foundElement !== -1 && index + 1 === aadNo.length) {
				console.log(foundElement);
				document.getElementById(`${foundElement}`).focus();
			} else {
				e.target.blur();
			}
		}
	};

	const editValueOtp = (index, e) => {
		let val = e.target.value;
		let d = aadNo;
		d[index] = parseInt(val);
		setAadNo(d);
	};

	return (
		<>
			<div className="card bg-white rounded-xl p-4">
				<div className="">
					{!otpGen
						? aadNo.map((value, index) => {
								return value !== "" ? (
									<input
										key={index}
										id={index}
										value={value.toString()}
										onKeyDown={(e) => {
											moveBox(index, e);
										}}
										onChange={(e) => {
											editValue(index, e);
										}}
										type="number"
										className="p-0 mr-3 w-[50px] h-[50px] outline-0 text-center border-b-2 border-blue-700"
										name=""
									/>
								) : (
									<input
										key={index}
										id={index}
										onKeyDown={(e) => {
											moveBox(index, e);
										}}
										onChange={(e) => {
											editValue(index, e);
										}}
										type="number"
										className="mr-3 w-[50px] h-[50px] outline-0 text-center p-0 border-b-2 border-blue-700"
										name=""
									/>
								);
						  })
						: otp.map((value, index) =>
								value !== "" ? (
									<input
										key={index}
										id={index}
										value={value.toString()}
										onKeyDown={(e) => {
											moveBoxOtp(index, e);
										}}
										onChange={(e) => {
											editValueOtp(index, e);
										}}
										type="number"
										className="p-0 mr-3 shadow w-[50px] h-[50px] outline-0 text-center border border-blue-700 rounded-lg"
										name=""
									/>
								) : (
									<input
										key={index}
										id={index}
										onKeyDown={(e) => {
											moveBox(index, e);
										}}
										onChange={(e) => {
											editValue(index, e);
										}}
										type="number"
										className="mr-3 shadow w-[50px] h-[50px] outline-0 text-center p-0 border border-blue-700 rounded-lg"
										name=""
									/>
								)
						  )}
				</div>
				<div className="">
					{!otpGen ? (
						<button onClick={genOtp}>Get OTP</button>
					) : (
						<button onClick={verify}>Verify</button>
					)}
				</div>
			</div>
		</>
	);
}
