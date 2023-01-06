import React from 'react'
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import Logout from './Logout'

const style ={
    nav: 'bg-gray-800 h-20 flex justify-between items-center p-4 rounded-3xl',
    heading: 'text-white text-3xl'
}

export default function () {
    const [user] = useAuthState(auth)
  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Messaging App</h1>
        {user ? <Logout /> : <SignIn/>}
    </div>
  )
}
