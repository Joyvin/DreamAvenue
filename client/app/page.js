"use client";
import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  
  if (!user) {
    router.push("/sign-up");
  }

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <div>
      <button onClick={handleSignOut}>Log Out</button>
      Welcome {user?.email}
    </div>
  );
}
