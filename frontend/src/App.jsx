import {  Routes, Route } from "react-router";
import Home from "./pages/home/home";
import Employee from "./pages/employees/Employee";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Employee/>} />
    </Routes>
    </>
   
  )
}

export default App