"use client"

import { ArrowLeft } from "lucide-react"


import { Link } from "react-router"
import EmployeeForm from "../../../components/EmployeeForm"


export default function EmployeeAdd() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">

      <div className="w-full max-w-4xl">

       
        <div className="mb-8">
          <Link to={'/employee'} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
            <ArrowLeft size={16}/>
            Back to Employee List
          </Link>

          <h1 className="mt-8 text-5xl font-semibold tracking-tight">
            Add a new teammate
          </h1>

          <p className="mt-3 text-zinc-400 text-lg">
            Add the information — you can always edit later.
          </p>
        </div>

         <EmployeeForm type={"add"} />
      


      </div>

    </div>
  )
}