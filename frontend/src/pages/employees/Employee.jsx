import { useQuery } from "@tanstack/react-query"
import EmployeeHead from "./EmployeeHead"
import EmployeeList from "./EmployeeList"
import SearchBar from "./SearchBar"
import { useState } from "react"


const Employee = () => {


  const [search,setSearch] = useState("");
  console.log(search)
  const {data,isLoading} = useQuery({
    queryKey:["employeeData",search],
    queryFn:async()=>{
           const res = await fetch(`http://localhost:5000/employee/user?query=${search}`)
           const data = await res.json()
           return data
    }
  })
 
  
  return (
    <div className="w-full h-full " >
    <EmployeeHead totalEmployee={data?.length} />
    <SearchBar search={search} setSearch={setSearch} />
    <EmployeeList users={data} isLoading={isLoading} />
    </div>
  
  )
}

export default Employee