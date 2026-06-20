import { useQuery } from "@tanstack/react-query"
import EmployeeHead from "./EmployeeHead"
import EmployeeList from "./EmployeeList"
import SearchBar from "./SearchBar"


const Employee = () => {

  const {data} = useQuery({
    queryKey:"employeeData",
    queryFn:async()=>{
           const res = await fetch("http://localhost:5000/employee/user")
           const data = await res.json()
           return data
    }
  })
 
   console.log(data)
  return (
    <>
    <EmployeeHead/>
    <SearchBar/>
    <EmployeeList users={data} />
    </>
  
  )
}

export default Employee