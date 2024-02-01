import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
	const aN = (await request.json()).aN;

	const options = {
		method: "POST",
		url: "https://api.sandbox.co.in/kyc/aadhaar/okyc/otp",
		headers: {
			accept: "application/json",
			// "Access-Control-Allow-Origin": "*",
			Authorization: process.env.NEXT_PUBLIC_OTP_ACCESS,
			"x-api-key": process.env.NEXT_PUBLIC_OTP_API,
			"x-api-version": "1.0",
			"content-type": "application/json",
		},
		data: { aadhaar_number: aN },
	};

	console.log(options);

	let res = await axios
		.request(options)
		.then(function (response) {
			console.log(response);
			return response.data;
		})
		.catch(function (error) {
			return NextResponse.json(error, { status: 200 });
		});

	return NextResponse.json({ op: res }, { status: 200 });
}
