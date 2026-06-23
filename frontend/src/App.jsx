import {  Routes, Route, Navigate } from "react-router";
import Home from "./pages/home/home";
import Employee from "./pages/employees/Employee";
import Navbar from "./components/Navbar";
import EmployeeAdd from "./pages/employees/add/EmployeeAdd";
import EmployeeEdit from "./pages/employees/edit/EmployeeEdit";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  

  const {data:user} = useQuery({
    queryKey:["getUser"],
    queryFn:async()=>{
      const res= await fetch("http://localhost:5000/auth/getUser",{credentials:"include"})
      const data = await res.json()

      return data
    }
  })
 
  return (
    <>
         { !user?.error ? <Navbar/>: <></> }
     <Routes>
        <Route path="/" element={ user?.error?  <Navigate to={"/login"} /> : <Home/>} />
        <Route path="/login" element={ !user?.error ?  <Navigate to={"/"} /> : <LoginPage/>} />
        <Route path="/register" element={ !user?.error?  <Navigate to={"/login"} /> : <RegisterPage/>} />
        <Route path="/employee" element={ user?.error?  <Navigate to={"/login"} /> : <Employee/>} />
        <Route path="/employee/add" element={ user?.error?  <Navigate to={"/login"} /> : <EmployeeAdd/>} />
        <Route path="/employee/edit/:id" element={ user?.error?  <Navigate to={"/login"} /> : <EmployeeEdit/>} />
    </Routes>
    <Toaster/>
    </>
   
  )
}

export default App