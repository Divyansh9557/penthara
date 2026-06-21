import { Link } from "react-router";


const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
        
          <div className="text-2xl font-bold tracking-wide">
            Employee Diary
          </div>

         
          <div className="flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to={"/employee"}  className="hover:text-blue-400 transition" >Employee </Link>
            <Link to={`/employee/add`} className="hover:text-blue-400 transition">Add employee</Link>
            
          </div>

         
          {/* <div>
            <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Login
            </button>
          </div> */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;