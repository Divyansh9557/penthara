import { Link } from "react-router"


const EmployeeHead = ({totalEmployee}) => {
  return (
     <div className="w-full bg-black  border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
        
      
        <div>
          <p className="text-sm text-emerald-400 font-medium mb-2">
            Employees
          </p>

          <h1 className=" text-2xl md:text-4xl font-semibold text-white tracking-tight">
            The whole team
          </h1>

          <p className="text-gray-400 mt-2 text-lg">
            Total Employee: {totalEmployee}
          </p>
        </div>

        
        <div>
          <Link to={'/employee/add'} className="flex items-center gap-2 bg-green-500 text-black px-2 py-1 md:px-5 md:py-2.5 rounded-md md:rounded-xl hover:bg-green-300 transition">
            <span className="text-lg font-semibold">+</span>
            Add employee
          </Link>
        </div>

      </div>
    </div>
  )
}

export default EmployeeHead