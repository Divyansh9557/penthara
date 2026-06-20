
import { Mail, Building, Edit, Trash } from "lucide-react";
import { Link } from "react-router";
const EmployeeCard = ({user,index}) => {
  return (
    <div
  key={index}
  className="bg-zinc-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-zinc-800 transition"
>
  
  <div className="flex items-start justify-between">
    
    
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-emerald-400/10 text-emerald-400 flex items-center justify-center font-semibold">
        {user.initials}
      </div>

      <div>
        <h2 className="text-white font-semibold text-lg">
          {user.name}
        </h2>
        <p className="text-gray-400 text-sm">{user.role}</p>
      </div>
    </div>

   
    <div className="flex items-center gap-2">
      <Link to={`/employee/edit/${index}`} className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition">
        <Edit/>
      </Link>
      <button className="text-gray-400 hover:text-red-400 p-2 rounded-lg hover:bg-red-500/10 transition">
        <Trash/>
      </button>
    </div>

  </div>


  <div className="border-t border-white/10 my-4"></div>

 
  <div className="space-y-2 text-sm">
    <div className="flex items-center gap-2 text-gray-400">
      <Building size={16} />
      {user.dept}
    </div>

    <div className="flex items-center gap-2 text-gray-400">
      <Mail size={16} />
      {user.email}
    </div>
  </div>
</div>
  )
}

export default EmployeeCard