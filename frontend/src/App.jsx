import {  Routes, Route } from "react-router";
import Home from "./pages/home/home";
import Employee from "./pages/employees/Employee";
import Navbar from "./components/Navbar";
import EmployeeAdd from "./pages/employees/add/EmployeeAdd";
import EmployeeEdit from "./pages/employees/edit/EmployeeEdit";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/employee" element={<Employee/>} />
        <Route path="/employee/add" element={<EmployeeAdd/>} />
        <Route path="/employee/edit/:id" element={<EmployeeEdit/>} />
    </Routes>
    <Toaster/>
    </>
   
  )
}

export default App