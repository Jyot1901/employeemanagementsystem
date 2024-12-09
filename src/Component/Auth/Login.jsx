import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submithandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex  h-screen w-screen items-center justify-center'>
            <div className='border-2 bg-[#1c1c1c]  rounded-2xl border-[#1c1c1c]'>
                <form onSubmit={submithandler} className=' flex mx-8 my-8 flex-col items-center justify-center'>
                    <div className='text-white mr-48 text-lg font-bold'>Email Address</div>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className='px-16 py-3 text-black m-5  rounded-full border-2 border-black' type="email" placeholder='Enter your email' />
                    <div className='text-white mr-56 text-lg font-bold'>Password</div>

                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className='px-16 py-3 m-5 text-black  rounded-full border-2 border-black' type="password" placeholder='Enter password' />
                    <button className='hover:bg-emerald-600 text-white text-2xl mt-4 text-md font-sans font-bold bg-emerald-500 py-2 px-[120px] rounded-full'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login