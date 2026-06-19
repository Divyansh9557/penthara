

const EmployeeHead = () => {
  return (
     <div className="w-full bg-black  border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
        
      
        <div>
          <p className="text-sm text-emerald-400 font-medium mb-2">
            Directory
          </p>

          <h1 className="text-4xl font-semibold text-white tracking-tight">
            The whole team
          </h1>

          <p className="text-gray-400 mt-2 text-lg">
            6 people across 5 departments.
          </p>
        </div>

        
        <div>
          <button className="flex items-center gap-2 bg-green-500 text-black px-5 py-2.5 rounded-xl hover:bg-green-300 transition">
            <span className="text-lg font-semibold">+</span>
            Add employee
          </button>
        </div>

      </div>
    </div>
  )
}

export default EmployeeHead