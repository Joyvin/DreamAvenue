"use client";
import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Home() {
	const auth = getAuth();
	const [user] = useAuthState(auth);
	const router = useRouter();

	onAuthStateChanged(auth, (user) => {
		if (user) {
			const uid = user.uid;
			console.log(uid);
		} else {
			router.push("/sign-in");
		}
	});

	return (
		<div>
			<button
				onClick={() => {
					signOut(auth);
					// sessionStorage.removeItem("user");
				}}
			>
				Log Out
			</button>
			Welcome {user?.email}
		</div>
	);
}
