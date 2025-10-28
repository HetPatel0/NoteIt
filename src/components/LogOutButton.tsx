"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { logOutAction } from '@/actions/users'

function LogOutButton() {
    
const router  = useRouter();

const [loading, setLoading] = useState(false);
const handleLogOut =  async() => {
    setLoading(true);
    const {errorMessage} = await logOutAction(); 
; //simulate error message from server;
    if (!errorMessage) {
        toast.success("Logged out successfully");
        router.push('/');

    }
    else {
        toast.error("Error logging out");
    }

    setLoading(false);
};
  return (
    <Button variant="outline"  className='w-24' onClick={handleLogOut}>
        {loading ? ( <Loader2 className='animate-spin' />) : ("Logout")}
    </Button>
  )
}

export default LogOutButton