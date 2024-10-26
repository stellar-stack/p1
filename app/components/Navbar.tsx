import React from 'react'
import { auth, signOut, signIn } from "@/auth"
import Link from 'next/link'

const Navbar = async () => {

    const session = await auth()

    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between item-center'>
                <Link href='/'>LOGO</Link>
            </nav> 

            <div className='flex items-center gap-5'>
                {session && session?.user ? (
                    <>
                        <Link href='/startup/create'>
                            <span>Create</span>
                        </Link>

                        <button onClick={signOut}>
                            <span>Logout</span>
                        </button>

                        <Link href={`/user/${session?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                ): (
                    <button onClick={signIn('github')}>
                        <span>Login</span>
                    </button>
                )}
            </div>

        </header >
    )
}

export default Navbar
