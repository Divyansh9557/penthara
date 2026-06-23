/* eslint-disable no-unused-vars */

import {  useMutation, useQuery } from "@tanstack/react-query";
import { LockIcon, User2, LogIn } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, Router, useNavigate } from "react-router";

const RegisterPage = () => {

	const navigate = useNavigate()


    const [email,setEmail] = useState()
    const [fullname,setFullname] = useState()
    const [confirmPassword,setConfirmPassword] = useState()
    const [password,setPassword] = useState()

    const {data,mutate,isPending} = useMutation({
        mutationFn:async()=>{
            const res = await fetch("http://localhost:5000/auth/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
				body: JSON.stringify({email,password,fullname})
            })
           const data = await res.json()
		   if(data.error){
			toast.error(data.error)
			throw new Error(data.error)
		   }
		   return data
        },
		onSuccess:async()=>{
			toast.success("User Register Succesfully")
             navigate('/login')
		}
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(password!==confirmPassword) {
            toast.error("Password does not match")
            return
        }
        mutate()
    }

	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center px-4">

			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
			</div>


			<div className="relative w-full max-w-md">

			
				<div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 shadow-2xl">


					<div className="text-center mb-8">

						<div className="mx-auto w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
							<LogIn size={28}/>
						</div>

						<h1 className="text-4xl font-bold">
							Welcome Back
						</h1>

						<p className="text-zinc-400 mt-2">
							Register your account
						</p>

					</div>



					<form className="flex flex-col gap-5" onSubmit={handleSubmit} >


						<div className="flex items-center gap-3 bg-zinc-800 border border-zinc-700 rounded-xl px-4">

							<User2 className="text-zinc-400"/>

							<input
								type="text"
								name="fullname"
								placeholder="fullname"
								className="
								w-full bg-transparent py-3
								outline-none
								text-white
								placeholder:text-zinc-500
								"
                                value={fullname}
                                onChange={(e)=> setFullname(e.target.value)}
							/>

						</div>
						<div className="flex items-center gap-3 bg-zinc-800 border border-zinc-700 rounded-xl px-4">

							<User2 className="text-zinc-400"/>

							<input
								type="email"
								name="email"
								placeholder="email"
								className="
								w-full bg-transparent py-3
								outline-none
								text-white
								placeholder:text-zinc-500
								"
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
							/>

						</div>



						<div className="flex items-center gap-3 bg-zinc-800 border border-zinc-700 rounded-xl px-4">

							<LockIcon className="text-zinc-400"/>

							<input
								type="password"
								name="password"
								placeholder="Password"
								className="
								w-full bg-transparent py-3
								outline-none
								text-white
								placeholder:text-zinc-500
								"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
							/>

						</div>
						<div className="flex items-center gap-3 bg-zinc-800 border border-zinc-700 rounded-xl px-4">

							<LockIcon className="text-zinc-400"/>

							<input
								type="password"
								name="confirm password"
								placeholder="confirm password"
								className="
								w-full bg-transparent py-3
								outline-none
								text-white
								placeholder:text-zinc-500
								"
                                value={confirmPassword}
                                onChange={(e)=> setConfirmPassword(e.target.value)}
							/>

						</div>



						<button
							className="
							mt-2
							bg-primary
							hover:scale-[1.02]
							transition
							duration-300
							rounded-xl
							py-3
							font-semibold
							text-white
							shadow-lg
							"
							disable={isPending}
						>
							{isPending ?"Registering":"Register"}
						</button>


					</form>



				

				</div>

			</div>

		</div>
	);
};


export default RegisterPage;