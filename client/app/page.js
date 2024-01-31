"use client";
import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  // const userSession = sessionStorage.getItem("user");
  
  if (!user) {
    router.push("/sign-in");
  }

  return (
    <div>
      <button onClick={() => {
        signOut(auth);
        // sessionStorage.removeItem("user");
      }}>Log Out</button>
      Welcome {user?.email}
    </div>
  );
}
