'use client'

//This is the navigation bar of the website, you can find here the providers, the font of the website, the style, the elements of the navigation and many other things

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSession, getProviders, signIn, signOut } from 'next-auth/react'

const Nav = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        const setupProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }

        setupProviders();
    }, []);

    return (
        //links and their styles are found here
        <nav className=' w-full mb-16 pt-3 flex justify-between bg-slate-700 pb-2.5'>
            <div className='flex gap-10'>
                <Link href={"/"} className=' ml-2 rounded'>
                    <Image
                    src={"/B.png"}
                    alt=''
                    height={40}
                    width={40}
                    className='rounded-full'
                    >
                    </Image>
                </Link>
                <Link href={"/blogs"} className='font-bold text-2xl text-indigo-100'>
                    Blogs
                </Link>
                <Link href={"/about"} className='font-bold text-2xl text-indigo-100'>
                    About
                </Link>
            </div>
            {/* Desktop Version */}
            <div>
                {session?.user ? (

                //create post or sign out , the create post button will only be visible to the wesite's owner !
                    <div className='flex gap-3 md:gap-5'>
                        {session?.user?.id == "66ce2ec84db4d03df41b24e4" &&
                            <Link href={"/create-blog"} className='bg-indigo-500 text-white rounded-lg mr-2 pt-1 pb-1 pr-1 pl-1'>
                                Create Post
                            </Link>}
                        <button onClick={signOut} type='button' className='bg-indigo-500 text-white rounded-lg mr-2 pt-1 pb-1 pr-1 pl-1'>
                            Sign Out
                        </button>
                        <Image
                            src={session?.user?.image}
                            alt=""
                            className='rounded-full mr-2'
                            width={35}
                            height={35}
                        />
                    </div>
                ) : 
                
                //else sign in using Google in this case
                (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button
                                type='button'
                                key={provider.id}
                                onClick={() => signIn(provider.id)}
                                className='bg-indigo-500 text-white rounded-lg mr-2 pt-1 pb-1 pr-1 pl-1'
                            >
                                Sign In with <span className='text-black'>{provider.name}</span>
                            </button>
                        ))}
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav