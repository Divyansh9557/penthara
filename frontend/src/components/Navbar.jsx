import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link} from "react-router";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient()
    const {mutate} = useMutation({
    
    mutationFn:async()=>{
      const res= await fetch("http://localhost:5000/auth/logout",{credentials:"include"})
      const data = await res.json()

      return data
    },
    onSuccess:async()=>{
      toast.success("Logout Successfully")
      queryClient.invalidateQueries({queryKey:["getUser"]})
      
    }
  })


  return (
    <nav className="bg-black text-white relative z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-16">

         
          <Link to="/" className="text-lg md:text-2xl font-bold tracking-wide">
            Employee Diary
          </Link>


          <div className="hidden md:flex items-center space-x-8">

            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>

            <Link to="/employee" className="hover:text-blue-400 transition">
              Employee
            </Link>

            <Link to="/employee/add" className="hover:text-blue-400 transition">
              Add employee
            </Link>

          </div>
           <button onClick={()=> mutate() } className="text-white cursor-pointer px-4 rounded-2xl py-2 bg-red-800 " >
            Logout
          </button>


          
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden z-50 text-2xl"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>


       
        <div
          className={`
            fixed top-0 right-0 h-screen w-64 
            bg-black border-l border-gray-800
            transform  transition-transform duration-300 ease-in-out
            md:hidden
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >

          <div className="flex flex-col gap-8 p-8 mt-10">

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="  hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              to="/employee"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400"
            >
              Employee
            </Link>

            <Link
              to="/employee/add"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400"
            >
              Add employee
            </Link>

          </div>

         
        </div>

       

      </div>
    </nav>
  );
};

export default Navbar;