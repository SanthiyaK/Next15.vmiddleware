"use client"
import React from 'react'
import { UserLogout } from '../action';
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();
  const logout =async()=>{
    const result = await UserLogout();
    if (result.success) {
      router.push("/login")
    } 
  }
  
  return (
  <>
    <div>Dashboard page</div>
    <form action={logout}>
    <button >
    LOGOUT
  </button></form></>
    
  );
  
}
